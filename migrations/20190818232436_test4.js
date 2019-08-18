exports.up = knex => {
  return knex.schema.createTable("test4", table => {
    table
      .increments()
      .primary()
      .index();
    table.float("latitude");
    table.float("longitude");
    table.text("name");
    table.text("address1");
    table.text("state");
    table.text("city");
    table.text("highway");
    table.boolean("wifi");
    table.boolean("atm");
    table.text("store_type");
  });
};

exports.down = knex => {
  return knex.schema.dropTable("test4");
};
