const db = require("../data/data-config");

module.exports = {
  getAll
};

function getAll() {
  return db("users");
}
