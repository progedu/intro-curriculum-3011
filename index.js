'use strict';
const http = require('http');
const server = http.createServer((req, res) => {
  res.writeHead(200, {
    'Content-Type': 'text/plain; charset=utf-8'
  });
  res.write(req.headers['user-agent']);
	const fs = require('fs')
	const fileName = './httptest.html';
	const hyojitext = fs.readFileSync(fileName,'utf-8');
  res.write(hyojitext)
  res.end();
});
const port = 8000;
server.listen(port, () => {
  console.log('Listening on ' + port);
});
