'use strict';
const http = require('http');
const fs = require('fs');

const server = http.createServer(
  (req, res) => {
    fs.readFile('./test.html', 'UTF-8',(error, data) => {
      res.writeHead(200, {
        'Content-Type': 'text/html; charset=utf-8'
      });
      res.write(data);
      res.end();
    });
  });
const port = 8000;
server.listen(port, () => {
  console.log('Listening on ' + port);
});