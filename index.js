'use strict';

require('dotenv');
const app = require('./src/app');
const { sequelize } = require('./auth/model/index');
const PORT = process.env.PORT || 3000;

sequelize.sync()
  .then(app.start(PORT))
  .catch(error => console.error('Could not start server', error.message));
