
const parseRequest = (rawRequest) => {
  console.log(rawRequest);
  const parseArr = rawRequest.split('\r\n\r\n');
  
  console.log(parseArr);

  const body = parseArr[1];
  console.log(body);
  const [method, path] = parseArr[0].split(' ');
  console.log(parseArr[0]);

  
  
  const parseObj = { 
    method,
    path,
    body
  };

  return parseObj;
};



// eslint-disable-next-line no-unused-vars
const rawRequest2 = `POST / HTTP/1.1\r
Host: developer.mozilla.org\r
Accept-Language: fr\r
\r
{"name":"spot"}`;

/*parseRequest(rawRequest2);
*/
module.exports = parseRequest;
