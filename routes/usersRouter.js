const router = require("express").Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const jwtKey = process.env.JWT_SECRET;

const Users = require("../models/users-model");

router.get("/", (req, res) => {
  Users.getAll().then(users => {
    res.status(200).json(users);
  });
});

router.post("/register", (req, res) => {
  const newUser = req.body;
  newUser.programs = newUser.programs.join(", ");
  console.log(newUser);
  Users.findByUsername(newUser.username).then(userFound => {
    if (userFound !== null) {
      return res.status(400).json({ message: "That username already exists!" });
    } else {
      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) throw err;
          newUser.password = hash;
          Users.add(newUser)
            .then(user => {
              user.programs = user.programs.split(", ");
              return res.status(200).json(user);
            })
            .catch(err =>
              res.status(400).json({
                message:
                  "Something went wrong when adding the user to the database"
              })
            );
        });
      });
    }
  });
});

router.post("/login", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  Users.findByUsername(username).then(userFound => {
    if (userFound === null) {
      return res.status(404).json({ username: "User does not exist" });
    } else {
      userFound.programs = userFound.programs.split(", ");
      bcrypt
        .compare(password, userFound.password)
        .then(isMatch => {
          if (isMatch) {
            const payload = {
              id: userFound.id,
              username: userFound.username
            };

            // Sign Token
            jwt.sign(payload, jwtKey, { expiresIn: 7200 }, (err, token) => {
              res
                .status(200)
                .json({ ...userFound, success: true, token: token });
            });
          } else {
            res.status(401).json({ message: "Invalid Credentials" });
          }
        })
        .catch(error => {
          res.status(500).json(error);
        });
    }
  });
});

module.exports = router;
