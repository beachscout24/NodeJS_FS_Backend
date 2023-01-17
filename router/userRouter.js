const express = require('express');
const { saveUser, findUser } = require('../db/db');
const bcrypt = require('bcrypt');
const User = require('../models/userModel');
const mongoose = require('mongoose');
const router = express.Router();

router.post('/register', (req, res, next) => {
  findUser({ email: req.body.email })
    .then((user) => {
      // if the user exist
      if (user) {
        // return response that says Email Exist try logging in
        return res.status(409).json({ message: 'User exist, try logging in' });
      } else {
        // map our req.body to our user model
        const user = new User();
        user._id = mongoose.Types.ObjectId();
        const newUser = Object.assign(user, req.body);
        // encrypt the password
        bcrypt.hash(newUser.password, 10, (err, hash) => {
          if (err) {
            return res.status(501).json({ message: 'Error: ' + err.message });
          } else {
            // set the password with the encrypted password
            newUser.password = hash;
            // save the user to the database
            saveUser(newUser)
              .then((user) => {
                return res.status(201).json({
                  message: 'Successful Registration',
                  user: user,
                });
              })
              .catch((err) => {
                res.status(501).json({
                  error: {
                    message: message,
                    status: err.status,
                  },
                });
              });
          }
        });
      }
    })
    .catch((err) => {
      res.status(501).json({
        error: {
          message: message,
          status: err.status,
        },
      });
    });
});

router.post('/login', (req, res) => {});

module.exports = router;
