'use strict';

const express = require('express');
const app = express();

const signinAuthRouter = require('../auth/routes/signin');
const signupAuthRouter = require('../auth/routes/signup');

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(signinAuthRouter);
app.use(signupAuthRouter);

module.exports = {
  app,
  start: (PORT) => app.listen(PORT, () => console.log(`Server listening on port ${PORT}`)),
};
