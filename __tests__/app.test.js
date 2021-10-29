const request = require('supertest');
const app = require('../lib/app');

describe('app routes', () => {
  it('route / gets plain text hi', async() => {
    const res = await request(app).get('/');
    expect(res.text).toEqual('hi');
  });
  it('route /echo post request body', async() => {
    const res = await request(app).post('/echo');
    console.log(res);
    expect(res.text).toEqual('test=test');
  });
  it('route /red gets html red', async() => {
    const res = await request(app).get('/red');
    console.log(res);
    expect(res.text).toEqual(`<!DOCTYPE html>
    <html lang="en"><head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>red</title>
</head>
<body>
    <h1>red</h1>

</body></html>`);
  });
});

