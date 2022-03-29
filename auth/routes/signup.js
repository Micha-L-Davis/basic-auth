'use strict';

const express = require('express');
const router = express.Router();
const { UserModel } = require('../model/index');

router.post('/signup', async (req, res) => {
  try {
    const record = await UserModel.create(req.body);
    res.status(201).json(record);
  } catch (e) {
    res.status(403).send('Error Creating User', e);
  }
});

module.exports = router;
