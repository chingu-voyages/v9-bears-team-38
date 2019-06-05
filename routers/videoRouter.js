const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

const {Video} = require('../models/videoModel');

router.get('/getvid', (req, res) => {
  Video.find()
    .then(posts => {
      res.json(posts.map(post => post.serialize()));
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({error: 'something went terribly wrong'});
    });
});

router.post('/addvid', (req, res) => {
  const query = {'video.title': req.body.title};
  const update = req.body;
  Video.findOneAndUpdate(query, update, {upsert: true, new: true}, function(
    error,
    result,
  ) {
    if (error) return res.send(500, {error});
    return res.send('Goal successfully updated');
  });
});

module.exports = router;
