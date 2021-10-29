const net = require('net');
const parseRequest = require('./utils/parseRequest');
const createResponse = require('./utils/createResponse');

const app = net.createServer(socket => {
  socket.on('data', data => {
    
    const request = parseRequest(data.toString());
    console.log(request);
    if(request.method === 'GET' && request.path === '/'){
      socket.write(createResponse({ body: 'hi', contentType: 'text/plain',
        status:  '200 OK'
      }));
    }
    else {
      socket.write(createResponse({ body: 'Not Found', status: '404 Not Found', contentType: 'text/plain' }));
    }
   
    //console.log(request);
    socket.end();
  });
});

module.exports = app;
