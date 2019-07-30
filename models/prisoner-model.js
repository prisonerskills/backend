const db = require("../data/data-config");

module.exports = {
  getAll,
  findById,
  add,
  getAllById,
  update
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

function update(id, changes) {
  return db("prisoners")
    .where({ id })
    .update(changes)
    .then(prisoner => {
      return findById(...id);
    });
}

function remove(id) {
  return db("prisoners")
    .where("id", id)
    .del();
}
