'use strict';
const fs = require('fs');
const fileName = './test.html';
const contents = fs.readFileSync(fileName, 'utf8');

const http = require('http');
const server = http.createServer((req, res) => {
  res.writeHead(200, {
    'Content-Type': 'text/html; charset=utf-8'
  });
  res.write(contents);
  res.end();
});
const port = 8000;
server.listen(port, () => {
  console.log('Listening on ' + port);
});