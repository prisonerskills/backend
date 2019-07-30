exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("users")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("users").insert([
        { username: "Test001", password: "123456" },
        { username: "Test002", password: "123456" }
      ]);
    });
};
