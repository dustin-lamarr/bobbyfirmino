const router = require('express').Router();
const withAuth = require('../../utils/auth')
const { User } = require('../../models');
const fs = require("fs");
const { Bobby } = require("../../models");
const gif = Bobby.img;


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