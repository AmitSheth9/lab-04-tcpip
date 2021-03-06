const net = require('net');
const parseRequest = require('./utils/parseRequest');
const createResponse = require('./utils/createResponse');

const app = net.createServer(socket => {
  socket.on('data', data => {
    console.log('data', data.toString());
    const request = parseRequest(data.toString());
    console.log(request);
    const rawRequest = data.toString();
    const parsedRequest = rawRequest.split('\r\n');
    const postBody = parsedRequest[10];
    
    if(request.method === 'GET' && request.path === '/'){
      socket.write(createResponse({ body: 'hi', contentType: 'text/plain',
        status:  '200 OK'
      }));
    }
    else if(request.method === 'POST' && request.path === '/echo'){
      console.log(postBody);
      socket.write(createResponse({ body: request.body,
        contentType: 'text/plain',
        status: '200 OK' }));
      
    }
    else if(request.method === 'GET' && request.path === '/red'){
      const red = '<h1>red</h1>';
      socket.write(createResponse({ body: red, contentType: 'text/html', status: '200 OK' }));
    }
    else if(request.method === 'GET' && request.path === '/green'){
      const green = `<!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="UTF-8">
          <meta http-equiv="X-UA-Compatible" content="IE=edge">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>green</title>
      </head>
      <body>
          <h1>green</h1>
      </body>
      </html>`;
      socket.write(createResponse({ body: green, status: '200 OK',
        contentType: 'text/html' }));
    }
    else if(request.method === 'GET' && request.path === '/blue') {
      const blue = `<!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="UTF-8">
          <meta http-equiv="X-UA-Compatible" content="IE=edge">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>blue</title>
      </head>
      <body>
          <h1>blue</h1>
      </body>
      </html>`;
      socket.write(createResponse({ body: blue, status: '200 OK', contentType: 'text/html' }));
    }
    else {
      socket.write(createResponse({ body: 'Not Found', status: '404 Not Found', contentType: 'text/plain' }));
    }
   
    //console.log(request);
    socket.end();
  });
});

module.exports = app;
