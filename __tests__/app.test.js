const request = require('supertest');
const app = require('../lib/app');

describe('app routes', () => {
  it('route / gets plain text hi', async() => {
    const res = await request(app).get('/');
    expect(res.text).toEqual('hi');
  });
});

