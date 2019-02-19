const express = require("express");
const parser = require("body-parser");
const morgan = require("morgan");
const router = require("./router.js");
const path = require("path");
const app = express();
const port = 3000;

//middleware
app.use(morgan("dev"));
app.use(parser.json());
app.use(parser.urlencoded({ extended: true }));

//serve up static files
app.use(express.static(path.join(__dirname, "../public")));

app.get("/", (req, res) => {
  res.send("hello");
});

app.use("/api", router);

app.listen(port, err => {
  if (err) {
    return console.log(err);
  }
  console.log(`Listening on ${port}`);
});
