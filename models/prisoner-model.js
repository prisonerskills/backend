const db = require("../data/data-config");

module.exports = {
  getAll,
  findById,
  add,
  getAllById
};

function getAll() {
  return db("prisoners");
}

function getAllById(id) {
  return db("prisoners")
    .where({ prisonID: id })
    .then(prisoners => {
      if (prisoners.length > 0) {
        return prisoners;
      } else {
        return null;
      }
    });
}

function findById(id) {
  return db("prisoners")
    .where({ id })
    .first()
    .then(prisoner => {
      if (prisoner) {
        return prisoner;
      } else {
        return null;
      }
    });
}

function add(prisoner) {
  return db("prisoners")
    .insert(prisoner, "id")
    .then(id => {
      return findById(...id);
    });
}
