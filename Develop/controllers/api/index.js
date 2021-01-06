const router = require('express').Router();
var path = require("path");
const teamRoutes = require('./teams');
const userRoutes = require('./userRoutes');

router.use('/users', userRoutes);
router.use('/teams', teamRoutes);



// router.use('/')
module.exports = router;