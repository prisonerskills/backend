exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("prisoners")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("prisoners").insert([
        {
          name: "Simon",
          skills: "Skill-A, Skill-B, Skill-C",
          certifications: "Cert-A, Cert-B, Cert-C",
          goals: "goal-1, goal-2",
          payRate: 9.5,
          availStart: "9/12/19"
        },
        {
          name: "Jeff",
          skills: "Skill-A, Skill-B, Skill-C",
          certifications: "Cert-A, Cert-B, Cert-C",
          goals: "goal-1, goal-2",
          payRate: 9.5,
          availStart: "9/12/19"
        },
        {
          name: "Sam",
          skills: "Skill-A, Skill-B, Skill-C",
          certifications: "Cert-A, Cert-B, Cert-C",
          goals: "goal-1, goal-2",
          payRate: 9.5,
          availStart: "9/12/19"
        },
        {
          name: "Max",
          skills: "Skill-A, Skill-B, Skill-C",
          certifications: "Cert-A, Cert-B, Cert-C",
          goals: "goal-1, goal-2",
          payRate: 9.5,
          availStart: "9/12/19"
        },
        {
          name: "George",
          skills: "Skill-A, Skill-B, Skill-C",
          certifications: "Cert-A Cert-B Cert-C",
          goals: "goal-1 goal-2",
          payRate: 9.5,
          availStart: "9/12/19"
        },
        {
          name: "Paul",
          skills: "Skill-A, Skill-B, Skill-C",
          certifications: "Cert-A, Cert-B, Cert-C",
          goals: "goal-1, goal-2",
          payRate: 9.5,
          availStart: "9/12/19"
        }
      ]);
    });
};
