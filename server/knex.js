const knex = require("knex");
require("dotenv").config();

const db = knex({
  client: "pg",
  connection:
    process.env.PORT || `postgres://${process.env.USER}/127.0.0.1:5432/test4`,
  searchPath: "public",
  db: {
    directly: "./data"
  }
});

module.exports = db;
