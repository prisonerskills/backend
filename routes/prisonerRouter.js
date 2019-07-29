const router = require("express").Router();

const Prisoners = require("../models/prisoner-model");

router.get("/", (req, res) => {
  console.log("working");
  Prisoners.getAll()
    .then(prisoners => {
      res.status(200).json(prisoners);
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

router.post("/add", (req, res) => {
  const prisonerData = req.body;
  prisonerData.skills = prisonerData.skills.join(", ");
  prisonerData.certifications = prisonerData.certifications.join(", ");
  prisonerData.goals = prisonerData.goals.join(", ");

  Prisoners.add(prisonerData)
    .then(prisoner => {
      prisoner.skills = prisoner.skills.split(", ");
      prisoner.certifications = prisoner.certifications.split(", ");
      prisoner.goals = prisoner.goals.split(", ");

      res.status(200).json(prisoner);
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

module.exports = router;
