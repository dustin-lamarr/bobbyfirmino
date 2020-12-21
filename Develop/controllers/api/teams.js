const router = require('express').Router();
const Bobby = require('../../models');

router.get('/', async (req,res) => {
    try {   
        const gifData = await Bobby.findAll();
        // res.send(gifData)
    res.status(200).json(gifData);
} catch (err) {
    res.status(500).json(err);
}
});

// router.get('/liverpool', async (req,res) => {
//     try{
//         const gifData = await Bobby.findAll();
//         res.status(200).json(gifData);
//     } catch (err) {
//         res.status(500).json(err);
//     }
//     // res.redirect('/');

// });

// router.get('tottenham', async (req, res) => {
    
// })

module.exports = router;