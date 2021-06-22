const router = require('express').Router();
const withAuth = require('../../utils/auth')
const { User } = require('../../models');
const fs = require("fs");
const { Bobby } = require("../../models");
const uploadGif = require("../../public/js/gifUpload");
const gif = Bobby.img;

const writeGifs = async (req, res) => {
    try {
        console.log(req.file);
        if (req.file === undefined) {
            return res.send('You must select a file.');
        }
  
        Bobby.create({
            type: req.file.mimetype,
            name: req.file.originalname,
            data: fs.readFileSync(
                __basedir + "/resources/static/assets/uploads/" + req.file.filename
            ),
        }).then((gif) => {
            fs.writeFileSync(
                __basedir + "/resources/static/assets/tmp" + gif.name, 
                image.data
            );
          
            return res.send('File has been uploaded.');
        });
    } catch (error) {
        console.log(error);
        return res.send(`Error uploading image: ${error}`);
    }
  };

  router.post('/', withAuth, async (req, res) => {
      try {
          const newBobby = await Bobby.create({
              ...req.body,
              user_id: req.session.user_id
          });
          res.status(200).json(newBobby);
      }
      catch (err) {
          res.status(400).json(err);
      }
  })
  
//   router.post('/profile', uploadGif.single("file"), writeGifs)

  module.exports = router;