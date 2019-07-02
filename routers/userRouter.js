const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

const {User} = require('../models/userModel');

router.post('/login', (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  console.log(req.body);
  User.findOne({username}).then(user => {
    if (!user) {
      return res.status(404).json({noUser: 'User Not Found'});
    } else if (password === user.password) {
      return res.json({
        success: true,
        name: user.username,
      });
    } else if (password != user.password) {
      return res.status(1000).json({noMatch: 'Password Incorrect'});
    }
  });
});

module.exports = router;
