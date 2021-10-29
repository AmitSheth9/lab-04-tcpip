
const parseRequest = (rawRequest) => {
  const parseArr = rawRequest.split('\r\n');
  const [method, path] = parseArr[0].split(' ');

  
console.log(parseArr);
    const body = parseArr[4];
  const parseObj = { 
    method: method,
    path: path,
    body: body
  };
  console.log(parseObj);
  return parseObj;
};



const rawRequest2 = `POST / HTTP/1.1\r
Host: developer.mozilla.org\r
Accept-Language: fr\r
\r
{"name":"spot"}`;

parseRequest(rawRequest2);

module.exports = parseRequest;
