'use strict';

const { Sequelize, DataTypes } = require('sequelize');
const userSchema = require('./user.schema');
const bcrypt = require('bcrypt');

const DATABASE_URL = process.env.NODE_ENV === 'test' ?
  'sqlite::memory' :
  process.env.DATABASE_URL || 'postgresql://localhost:5432/api-db';

const sequelize = new Sequelize(DATABASE_URL);

// const sequelize = new Sequelize(DATABASE_URL, {
//   dialectOptions: {
//     ssl: {
//       require: true,
//       rejectUnauthorized: false,
//     },
//   },
// });

const UserModel = userSchema(sequelize, DataTypes, bcrypt);

UserModel.authenticateBasic = async function (username, password) {
  let user = await this.findOne({ where: { username } });

  if (user) {
    let validUser = await bcrypt.compare(password, user.password);
    if (validUser) {
      return user;
    }
  }
};

module.exports = {
  sequelize,
  UserModel,
};
