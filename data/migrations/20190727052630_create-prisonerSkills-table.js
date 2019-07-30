exports.up = function(knex) {
  return knex.schema
    .createTable("users", tbl => {
      tbl.increments();
      tbl
        .string("username")
        .unique()
        .notNullable();
      tbl.string("password").notNullable();
      tbl
        .string("prisonName")
        .unique()
        .notNullable();
      tbl.integer("zipCode").notNullable();
      tbl
        .string("email")
        .unique()
        .notNullable();
    })
    .createTable("prisoners", tbl => {
      tbl.increments();
      tbl.string("name");
      tbl.string("skills");
      tbl.string("certifications");
      tbl.string("goals");
      tbl.decimal("payRate");
      tbl.date("availStart");
      tbl.string("headline");
      tbl
        .string("prisonID")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("users")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
    });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("prisoners");
};
