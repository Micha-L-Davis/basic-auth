'use strict';

const { app } = require('../src/app');
const { sequelize } = require('../auth/model/index');
const base64 = require('base-64');
const supertest = require('supertest');
const request = supertest(app);

beforeAll(async () => {
  await sequelize.sync();
});
afterAll(async () => {
  await sequelize.drop();
});

describe('testing our auth features', () => {

  it('Should allow users to signup, with a POST to `signup', async () => {
    let response = await request.post('/signup').send({
      username: 'Micha',
      password: 'ineffable',
    });

    expect(response.status).toEqual(201);
    expect(response.body.username).toEqual('Micha');
    expect(response.body.password).toBeTruthy();
    expect(response.body.password).not.toEqual('ineffable');
  });


});
