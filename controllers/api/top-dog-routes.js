const router = require("express").Router();
const { TopDogs } = require("../../models");

router.get("/:id", (req, res) => {
  TopDogs.findAll({
    where: {
      // // get user id from session (after front end is done)
      // user_id: req.session.user_id
      user_id: req.params.id,
    },
  })
    .then((dbDogData) => res.json(dbDogData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.post("/", (req, res) => {
  TopDogs.create({
    // // get user id from session (after front end is done)
    // user_id: req.session.user_id
    user_id: req.body.user_id,
    dog_id: req.body.dog_id,
  })
    .then((dbDogData) => res.json(dbDogData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.delete("/:id", (req, res) => {
  TopDogs.destroy({
    where: {
      id: req.params.id,
    },
  })
  .then((dbDogData) => res.json(dbDogData))
  .catch((err) => {
    console.log(err);
    res.status(500).json(err);
  });
})

module.exports = router;
