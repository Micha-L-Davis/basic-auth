'use strict';

// 3rd Party Resources
const express = require('express');

// Prepare the express app
const app = express();

// Import modules
const signinAuthRouter = require('../auth/routes/signin');
const signupAuthRouter = require('../auth/routes/signup');

// Process JSON input and put the data on req.body
app.use(express.json());

// Process FORM intput and put the data on req.body
app.use(express.urlencoded({ extended: true }));

// Process auth routers
app.use(signinAuthRouter);
app.use(signupAuthRouter);


// make sure our tables are created, start up the HTTP server.
module.exports = {
  app,
  start: (PORT) => app.listen(PORT, () => console.log(`Server listening on port ${PORT}`)),
};

