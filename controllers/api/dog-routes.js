const router = require("express").Router();
const { Dog, User } = require("../../models");

router.get("/", (req, res) => {
  Dog.findAll({
    include: [
      {
        model: User,
        attributes: ["username"],
      },
    ],
  })
    .then((dbDogData) => {
      if (!dbDogData) {
        res.status(404).json({ message: "No dogs found" });
        return;
      }
      res.json(dbDogData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get("/:id", (req, res) => {
  Dog.findOne({
    where: {
      id: req.params.id,
    },
    include: [
      {
        model: User,
        attributes: ["username"],
      },
    ],
  })
    .then((dbDogData) => {
      if (!dbDogData) {
        res.status(404).json({ message: "No dog found with specified ID!" });
        return;
      }
      res.json(dbDogData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.post("/", (req, res) => {
  // check for session
  Dog.create({
    user_id: req.body.user_id,
    name: req.body.name,
    breed: req.body.breed,
    temperament: req.body.temperament,
  })
    .then((dbDogData) => res.json(dbDogData))
    .catch((err) => {
      console.log(err);
      res.status(400).json(err);
    });
});

router.delete("/:id", (req, res) => {
  Dog.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((dbDogData) => {
      if (!dbDogData) {
        res.status(404).json({ message: "No dog found with specified ID!" });
        return;
      }
      res.json(dbDogData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
