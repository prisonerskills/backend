exports.up = function(knex) {
  return knex.schema
    .createTable("users", tbl => {
      tbl.increments();
      tbl
        .string("username")
        .unique()
        .notNullable();
      tbl.string("password").notNullable();
    })
    .createTable("prisoners", tbl => {
      tbl.increments();
      tbl.string("name");
      tbl.string("skills");
      tbl.string("certifications");
      tbl.string("goals");
      tbl.decimal("payRate");
      tbl.date("availStart");
    });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("users").dropTableIfExists("prisoners");
};
