const sqlite = require("sqlite3").verbose();
const path = require("path");
let db = new sqlite.Database(path.join(__dirname, "./amazon.db"));

module.exports = db;
