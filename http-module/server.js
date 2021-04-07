const http = require('http');

http.createServer((request, response) => {
  response.write('Hello from Node' )
  console.log("Url: " + request.url);
  console.log("Тип запроса: " + request.method);
  console.log("User-Agent: " + request.headers["user-agent"]);
  console.log("Все заголовки");
  console.log(request.headers);
  response.end();
 }).listen(3000)