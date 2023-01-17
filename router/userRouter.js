const express = require('express');
const { saveUser } = require('../db/db');

const router = express.Router();

router.post('/register', (req, res, next) => {
  // findUser
  // if the user exist
  // return response that syas Email Exist try logging in
  // else
  // encrypt the password
  // set the password with the encrypted password
  // save the user to the database
});

router.post('/login', (req, res) => {});

module.exports = router;
