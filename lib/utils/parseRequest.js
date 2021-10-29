
const parseRequest = (rawRequest) => {
  const parseArr = rawRequest.split('\r\n');
  const [method, path] = parseArr[0].split(' ');

  const parseObj = { 
    method,
    path
  };
  console.log(parseObj);
  return parseObj;
};


const rawRequest = `GET / HTTP/1.1\r
Host: developer.mozilla.org\r
Accept-Language: fr\r`;

parseRequest(rawRequest);

module.exports = parseRequest;
