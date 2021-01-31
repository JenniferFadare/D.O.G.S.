const sequelize = require("../config/connection");
const { User, Dog, TopDogs } = require("../models");
const router = require("express").Router();

router.get("/:id", (req, res) => {
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
        res.render("profile", { user, loggedIn: req.session.loggedIn });
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  });

  module.exports = router;