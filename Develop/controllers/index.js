const router = require('express').Router();
var path = require("path");

// router.get('/', (req, res) => {
//     try {
//         // res.render('index')
//         res.sendFile(path.join(__dirname, "./views/index.html"));
//         res.status(200).json();
//     } catch (err) {
//         res.status(400).json(err);
//     }
// });

router.get('/',function(req,res){
    res.sendFile(path.join(__dirname, '../views/index.html'));
  });

// router.use('/')
module.exports = router;
