const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

const {Video} = require('../models/videoModel');

router.get('/getvid', (req, res) => {
  Video.find()
    .then(videos => {
      res.json(videos);
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({error: 'something went terribly wrong'});
    });
});

router.post('/addvid', (req, res) => {
  let reqBody = req.body;
  console.log(reqBody);
  new Video(reqBody)
    .save()
    .then(result => {
      res.send(result);
    })
    .catch(err => {
      console.error(err);
    });
});

module.exports = router;
