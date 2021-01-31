const router = require('express').Router();
const apiRoutes = require('./api');
const homeRoutes = require('./home-routes.js');
const dashboardRoutes = require("./dashboard-routes")
const profileRoutes = require('./profile-routes');

router.use('/api', apiRoutes);
router.use('/', homeRoutes);
router.use('/dashboard', dashboardRoutes)
router.use('/profiles', profileRoutes)

module.exports = router;