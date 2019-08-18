const express = require("express");
const path = require("path");
const morgan = require("morgan");
const db = require("./knex");

const app = express();

//set up logger
app.use(
  morgan(
    ":remote-addr :remote-user :method :url HTTP/:http-version :status :res[content-length] - :response-time ms"
  )
);

//set up static assets
app.use(express.static(path.resolve(__dirname, "..", "build")));

//get method
app.get("/api/test4", (req, res) => {
  try {
    const allData = db.select().table("test4");
    res.json(allData);
  } catch (err) {
    console.log("something wrong...", err);
    res.sendStatus(500);
  }
});

//for react render for root file
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "..", "build", "index.html"));
});

module.exports = app;
