// const http = require("node:http");
import http from"node.http";

http.createServer((request, response) => {
  // magic happens here!
  response.write("<h1> Hello, World!</h1>");
  response.end();   
  
})
.listen(8080);
