const request = require('supertest');
const app = require('../lib/app');

describe('app routes', () => {
  it('route / gets plain text hi', async() => {
    const res = await request(app).get('/');
    expect(res.text).toEqual('hi');
  });
  it('route /echo post request body', async() => {
    const res = await request(app).post('/echo').send('test');
    expect(res.text).toEqual('test');
  });
  it('route /red gets html red', async() => {
    const res = await request(app).get('/red');
    expect(res.text).toEqual('<h1>red</h1>');
  });
  it('route /green gets html green', async() => {
    const res = await request(app).get('/green');
    expect(res.text).toContain('<h1>green</h1>');
  });
  it('route /blue gets html blue', async() => {
    const res = await request(app).get('/blue');
    expect(res.text).toContain('<h1>blue</h1>');
  });

});

