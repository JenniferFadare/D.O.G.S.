const router = require('express').Router();
const { User, Dog, TopDogs } = require("../models");
const sequelize = require("../config/connection");

router.get('/', (req, res) => {
  User.findAll({
    attributes: { exclude: ['password'] },
    include: [
      {
        model: Dog,
        as: "my-dogs"
      },
      {
        model: Dog,
        attributes: ["id", "name"],
        as: "top-eight"
      },
    ]
  })
  .then(dbUserData => {
    res.render('homepage', { dbUserData, loggedIn: req.session.loggedIn })
    console.log(dbUserData)
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
      res.redirect('/');
      return;
    }
  
    res.render('login');
  });

module.exports = router;