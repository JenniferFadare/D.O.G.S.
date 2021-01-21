const router = require('express').Router();
const dogRoutes = require('./dog-routes');
const topDogRoutes = require('./top-dog-routes');
const userRoutes = require('./user-routes');

router.use('/dog', dogRoutes)
router.use('/topDog', topDogRoutes)
router.use('/users', userRoutes)

module.exports = router;