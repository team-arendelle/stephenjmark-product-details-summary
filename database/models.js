const sqlite = require("sqlite3").verbose();
const path = require("path");
let db = new sqlite.Database(path.join(__dirname, "./amazon.db"));

module.exports = {
  getProductInfo: (id, callback) => {
    db.serialize(() => {
      db.all(
        `SELECT * FROM products p
          INNER JOIN primary_images pi on p.id = pi.id_products
          WHERE p.id = ${id}`,
        function(err, data) {
          if (err) callback(err);
          else callback(null, data);
        }
      );
    });
  },

  getColorOptions: (id, callback) => {
    db.serialize(() => {
      db.all(
        ` SELECT DISTINCT var_name, imgUrl FROM variations v
          WHERE v.id_options = (SELECT id FROM options o where o.id_products = ${id} AND o.option_name = "color")`,
        function(err, data) {
          if (err) callback(err);
          else callback(null, data);
        }
      );
    });
  },
  getSizeOptions: (id, callback) => {
    db.serialize(() => {
      db.all(
        ` SELECT DISTINCT var_name, imgUrl FROM variations v
          WHERE v.id_options = (SELECT id FROM options o where o.id_products = ${id} AND o.option_name = "size")`,
        function(err, data) {
          if (err) callback(err);
          else callback(null, data);
        }
      );
    });
  }
};
