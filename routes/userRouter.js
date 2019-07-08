const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

const {User} = require('../models/userModel');

router.post('/login', (req, res) => {
  const name = req.body.name;
  const password = req.body.password;
  User.findOne({name}).then(user => {
    if (!user) {
      return res.status(404).json({noUser: `${name} Not Found`});
    } else if (password === user.password) {
      return res.json({
        success: true,
        name: user.username,
      });
    } else if (password != user.password) {
      return res.status(400).json({noMatch: 'Password Incorrect'});
    }
  });
});

module.exports = router;
