'use strict';

const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const { UserModel } = require('../model/index');

// Signup Route -- create a new user
// Two ways to test this route with httpie
// echo '{"username":"john","password":"foo"}' | http post :3000/signup
// http post :3000/signup usernmae=john password=foo
router.post('/signup', async (req, res) => {

  try {
    req.body.password = await bcrypt.hash(req.body.password, 10);
    const record = await UserModel.create(req.body);
    res.status(201).json(record);
  } catch (e) {
    console.error(e);
    res.status(403).send('Error Creating User', e);
  }
});

module.exports = router;
