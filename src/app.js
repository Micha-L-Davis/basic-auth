'use strict';

// 3rd Party Resources
const express = require('express');

// Prepare the express app
const app = express();

// Import modules
const { sequelize } = require('../auth/model/index');
const signinAuthRouter = require('../auth/routes/signin');
const signupAuthRouter = require('../auth/routes/signup');

// Process JSON input and put the data on req.body
app.use(express.json());

// Process FORM intput and put the data on req.body
app.use(express.urlencoded({ extended: true }));

// Process auth routers
app.use(signupAuthRouter);
app.use(signinAuthRouter);

// make sure our tables are created, start up the HTTP server.
module.exports = {
  app,
  start: () => sequelize.sync()
    .then((PORT) => app.listen(PORT, () => console.log(`Server listening on port ${PORT}`)))
    .catch(error => console.error('Could not start server', error.message)),
};

