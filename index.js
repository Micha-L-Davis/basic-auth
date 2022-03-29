'use strict';

require('dotenv');
const app = require('./src/app');
const PORT = process.env.PORT || 3000;

app.start(PORT);
