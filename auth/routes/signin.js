'use strict';

const express = require('express');
const router = express.Router();
const { response } = require('express');
const authenticate = require('../auth');


// Signin Route -- login with username and password
// test with httpie
// http post :3000/signin -a john:foo
router.post('/signin', authenticate, (req, res) => {
  console.log(req.user);
  res.status(200).send(req.user);
});

module.exports = router;
