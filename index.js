'use strict';
const http = require('http');
const fs = require('fs');
const fileName='./h1-display.html'
const data = fs.readFileSync(fileName, 'utf8');
const server = http.createServer((req, res) => {
  res.writeHead(200, {
    'Content-Type': 'text/html; charset=utf-8'
  });
	res.write(data);
	//  res.write(req.headers['user-agent']);
  res.end();
});
const port = 8000;
server.listen(port, () => {
  console.log('Listening on ' + port);
});
