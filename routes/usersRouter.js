const router = require("express").Router();

const Users = require("../models/users-model");

router.get("/", (req, res) => {
  Users.getAll().then(users => {
    res.status(200).json(users);
  });
});

module.exports = router;
