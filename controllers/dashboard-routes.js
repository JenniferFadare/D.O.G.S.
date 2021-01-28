const sequelize = require("../config/connection");
const { User, Dog, TopDogs } = require("../models");
const router = require("express").Router();

router.get("/", (req, res) => {
  User.findOne({
    where: {
      id: req.session.user_id,
    },
    attributes: { exclude: ["password"] },
    include: [
      {
        model: Dog,
        as: "my-dogs",
      },
      {
        model: Dog,
        attributes: ["id", "name"],
        as: "top-eight",
      },
    ],
  })
    .then((dbUserData) => {
      const user = dbUserData.get({ plain: true });
      console.log(user);
      // const user = dbUserData.get({ plain: true })
      // console.log(user)
      res.render("dashboard", { user, loggedIn: req.session.loggedIn });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get("/edit-dogs/:id", (req, res) => {
  User.findOne({
    where: {
      id: req.params.id,
    },
    attributes: { exclude: ["password"] },
    include: [
      {
        model: Dog,
        as: "my-dogs",
      },
      {
        model: Dog,
        attributes: ["id", "name"],
        as: "top-eight",
      },
    ],
  })
    .then((dbUserData) => {
      const user = dbUserData.get({ plain: true });
      console.log(user);
      // const user = dbUserData.get({ plain: true })
      // console.log(user)
      res.render("edit-dog", { user, loggedIn: req.session.loggedIn });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get("/edit-top-dog/:id", (req, res) => {
  
  User.findOne({
    where: {
      id: req.params.id,
    },
    attributes: { exclude: ["password"] },
    include: [
      {
        model: Dog,
        attributes: ["id", "name"],
        as: "top-eight",
      },
    ],
  })
    .then((dbUserData) => {
      const user = dbUserData.get({ plain: true });
      console.log(user);
      // const user = dbUserData.get({ plain: true })
      // console.log(user)
      res.render("edit-top-dog", { user, loggedIn: req.session.loggedIn });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
  })

module.exports = router;
