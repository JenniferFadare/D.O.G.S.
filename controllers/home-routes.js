const router = require('express').Router();
const { User, Dog, TopDogs } = require("../models");
const sequelize = require("../config/connection");

router.get('/', (req, res) => {
  User.findAll({
    attributes: [ "id", "username" ],
  })
  .then(dbUserData => {
    const users = dbUserData.map((users) => users.get({plain: true }));
    res.render('homepage', { users, loggedIn: req.session.loggedIn })
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