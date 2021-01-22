const router = require('express').Router();
const { User, Dog, TopDogs } = require('../../models'); 


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
      .then(dbUserData => res.json(dbUserData))
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });

  // GET /api/users/1
router.get('/:id', (req, res) => {
    User.findOne({
        attributes: { exclude: ['password'] },
        where: {
          id: req.params.id
        },
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
          if (!dbUserData) {
            res.status(404).json({ message: 'No user found with this id' });
            return;
          }
          res.json(dbUserData);
        })
        .catch(err => {
          console.log(err);
          res.status(500).json(err);
        });
});

// POST /api/users
router.post('/', (req, res) => {
    User.create({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
        city: req.body.city
      })
      .then(dbUserData => res.json(dbUserData))
        // req.session.save(() => {
        //   req.session.user_id = dbUserData.id;
        //   req.session.username = dbUserData.username;
        //   req.session.loggedIn = true;
        .catch(err => {
          console.log(err);
          res.status(500).json(err);
        });
    });

//     router.post('/login', (req, res) => {
    
//         User.findOne({
//           where: {
//             email: req.body.email
//           }
//         }).then(dbUserData => {
//           if (!dbUserData) {
//             res.status(400).json({ message: 'No user with that email address!' });
//             return;
//           }
      
//           const validPassword = dbUserData.checkPassword(req.body.password);
      
//           if (!validPassword) {
//             res.status(400).json({ message: 'Incorrect password!' });
//             return;
//           }
      
//           res.json({ user: dbUserData, message: 'You are now logged in!' });
//         });
//       });
      

//     router.post('/logout', (req, res) => {
//   if (req.session.loggedIn) {
//     req.session.destroy(() => {
//       res.status(204).end();
//     });
//   }
//   else {
//     res.status(404).end();
//   }
// });


// PUT /api/users/1
router.put('/:id', (req, res) => {
    User.update(req.body, {
        individualHooks: true,
    where: {
        id: req.params.id
      }
    })
      .then(dbUserData => {
        if (!dbUserData[0]) {
          res.status(404).json({ message: 'No user found with this id' });
          return;
        }
        res.json(dbUserData);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
});

// DELETE /api/users/1
router.delete('/:id', (req, res) => {
    User.destroy({
        where: {
          id: req.params.id
        }
      })
        .then(dbUserData => {
          if (!dbUserData) {
            res.status(404).json({ message: 'No user found with this id' });
            return;
          }
          res.json(dbUserData);
        })
        .catch(err => {
          console.log(err);
          res.status(500).json(err);
        });
});




module.exports = router;