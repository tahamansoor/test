const http = require('http');
const Operations = require('./operations');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Welcome to the node.js server!');
});
const data = await Operations.readFileAsync('my-file.txt');

server.listen(3000);
