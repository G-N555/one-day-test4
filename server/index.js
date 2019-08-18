const app = require("./app");
const db = require("./knex");

const PORT = process.env.PORT || 7000;

async () => {
  try {
    //drop table if existing
    console.log("drop table");
    await db.schema.dropTableIfExists();

    //running migration
    console.log("Running migration");
    await db.migrate.latest();

    //seed data
    console.log("seeding data");
    await db.seed.run();

    //start server
    await app.listen(PORT, () => {
      console.log(`server listening on ${PORT}`);
    });
  } catch (err) {
    console.log("something wrong...", err);
    process.exit(-1);
  }
};
