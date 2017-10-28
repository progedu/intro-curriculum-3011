'use strict';
const http = require('http');
const fs = require('fs');
const template_dir = __dirname + '/templates/';
const server = http.createServer((req, res) => {
  res.writeHead(200, {
    'Content-Type': 'text/html; charset=utf-8'
  });
  res.write(fs.readFileSync(template_dir + 'index.html'), 'utf8');
  res.end();
});
const port = 8000;
server.listen(port, () => {
  console.log('Listening on ' + port);
});
