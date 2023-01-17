const express = require('express');
const { saveUser, findUser } = require('../db/db');
const User = require('../models/userModel');

const router = express.Router();

router.post('/register', (req, res, next) => {
  // findUser
  // if the user exist
  // return response that says Email Exist try logging in
  // encrypt the password
  // set the password with the encrypted password
  // save the user to the database
});

router.post('/login', (req, res) => {});

module.exports = router;
