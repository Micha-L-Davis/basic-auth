'use strict';

const express = require('express');
const router = express.Router();
const authenticate = require('../auth');

router.post('/signin', authenticate, (req, res) => {
  res.status(201).send(req.user);
});

module.exports = router;
