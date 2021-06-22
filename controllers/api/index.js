const router = require('express').Router();
var path = require("path");
const teamRoutes = require('./teams');
const userRoutes = require('./userRoutes');
const gifRoutes = require('./gifRoutes');

router.use('/users', userRoutes);
router.use('/teams', teamRoutes);
router.use('/gifs', gifRoutes)


// router.use('/')
module.exports = router;