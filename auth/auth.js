'use strict';

const base64 = require('base-64');
const { UserModel } = require('./model/index');

async function authenticate(req, res, next) {
  let basicHeaderParts = req.headers.authorization.split(' ');
  let encodedString = basicHeaderParts.pop();
  let decodedString = base64.decode(encodedString);
  let [username, password] = decodedString.split(':');

  try {
    let validUser = await UserModel.authenticateBasic(username, password);
    if (validUser) {
      req.user = validUser;
      next();
    }
    else {
      throw new Error('Invalid User');
    }
  } catch (error) { next(error); }

}

module.exports = authenticate;
