const sqlite = require("sqlite3").verbose();
const path = require("path");
let db = new sqlite.Database(path.join(__dirname, "./amazon.db"));
let products = [];

//create 100 product objects
const createProducts = () => {
  let long =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod";
  let medium = "Lorem ipsum dolor sit amet";
  let short = "Lorem ipsum";

  for (let i = 0; i < 100; i++) {
    let product = {};
    product.name = long;
    product.company = short;
    product.catagory = medium;
    product.price = (Math.random() * 80).toFixed(2);
    product.stockCount = Math.floor(Math.random() * 15);
    product.best_seller = Math.floor(Math.random() * 1.9);
    product.rating = (Math.random() * 5).toFixed(1);
    product.review_count = Math.floor(Math.random() * 1000);
    product.question_count = Math.floor(Math.random() * 1000);
    products.push(product);
  }
};

//Insert 100 Product rows into Products
const insertProducts = () => {
  products.forEach(product => {
    db.run(
      `INSERT INTO products (name, company, catagory, price, stockCount, best_seller, rating, review_count, question_count) VALUES(?,?,?,?,?,?,?,?,?)`,
      [
        product.name,
        product.company,
        product.catagory,
        product.price,
        product.stockCount,
        product.best_seller,
        product.rating,
        product.review_count,
        product.question_count
      ],
      function(err) {
        if (err) {
          return console.log(err.message);
        }
        // get the last insert id
        console.log(`A row has been inserted with rowid ${this.lastID}`);
      }
    );
  });
};

//Insert a single image into primary_image for each product
const insertPrimaryImages = () => {
  let imageIndex = 1;
  for (var i = 1; i <= 100; i++) {
    let id = i;
    let url = `https://s3.us-east-2.amazonaws.com/sjm-pokemon/${imageIndex}.jpg`;
    imageIndex === 20 ? (imageIndex = 1) : (imageIndex += 1);

    db.run(
      `INSERT INTO primary_images (imgUrl, id_product) VALUES(?,?)`,
      [url, id],
      function(err) {
        if (err) {
          return console.log(err.message);
        }
        // get the last insert id
        console.log(`A row has been inserted with rowid ${this.lastID}`);
      }
    );
  }
};

//insert select option on first 10 products
const insertSelectOptions = () => {
  for (var i = 1; i <= 10; i++) {
    let type = "select";
    let name = "size";
    let id = i;

    db.run(
      `INSERT INTO options (type, option_name, id_product) VALUES(?,?,?)`,
      [type, name, id],
      function(err) {
        if (err) {
          return console.log(err.message);
        }
        // get the last insert id
        console.log(`A row has been inserted with rowid ${this.lastID}`);
      }
    );
  }
};

//insert table option on products 5-15
const insertTableOptions = () => {
  for (var i = 6; i <= 15; i++) {
    let type = "table";
    let name = "color";
    let id = i;

    db.run(
      `INSERT INTO options (type, option_name, id_product) VALUES(?,?,?)`,
      [type, name, id],
      function(err) {
        if (err) {
          return console.log(err.message);
        }
        // get the last insert id
        console.log(`A row has been inserted with rowid ${this.lastID}`);
      }
    );
  }
};

const insertTableOptions = () => {
  for (var i = 6; i <= 15; i++) {
    let type = "table";
    let name = "color";
    let id = i;

    db.run(
      `INSERT INTO options (type, option_name, id_product) VALUES(?,?,?)`,
      [type, name, id],
      function(err) {
        if (err) {
          return console.log(err.message);
        }
        // get the last insert id
        console.log(`A row has been inserted with rowid ${this.lastID}`);
      }
    );
  }
};

createProducts();

db.serialize(() => {
  insertPrimaryImages();
  insertProducts();
  insertSelectOptions();
  insertTableOptions();
});

db.close(err => {
  if (err) {
    return console.error(err.message);
  }
  console.log("Close the database connection.");
});
