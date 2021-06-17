const router = require('express').Router();
var path = require("path");
const apiRoutes = require('./api');
const pageRoutes = require('./pageRoutes');

router.use('/api', apiRoutes);
router.use('/', pageRoutes);



module.exports = router;
