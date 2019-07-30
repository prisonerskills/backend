const router = require("express").Router();

const Prisoners = require("../models/prisoner-model");

router.get("/", (req, res) => {
  Prisoners.getAll()
    .then(prisoners => {
      console.log(prisoners);
      for (let i = 0; i < prisoners.length; i++) {
        prisoners[i].skills = prisoners[i].skills.split(", ");
        prisoners[i].certifications = prisoners[i].certifications.split(", ");
        prisoners[i].goals = prisoners[i].goals.split(", ");
      }

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

router.get("/prison/:id", (req, res) => {
  const { id } = req.params;
  Prisoners.getAllById(id).then(prisoners => {
    prisoners !== null
      ? res.status(200).json(prisoners)
      : res.status(400).json({
          message: "There are no prisoners for that prison"
        });
  });
});

router.get("/id/:id", (req, res) => {
  const { id } = req.params;
  Prisoners.findById(id).then(prisoner => {
    prisoner !== null
      ? res.status(200).json(prisoner)
      : res.status(400).json({
          message: "There is not a prisoner in our database with that ID"
        });
  });
});

module.exports = router;
