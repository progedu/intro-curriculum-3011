'use strict';
const http = require('http');
const server = http.createServer((req, res) => {
  res.writeHead(200, {
    'Content-Type': 'text/html; charset=utf-8'
  });
  res.write('<!DOCTYPE html><html lang="ja"><title>http-server</title><body><h1>Hello World !</h1><h2>HTMLの二番目に大きい見出しを表示します</h2></body></html>');
  res.end();
});
const port = 8000;
server.listen(port, () => {
  console.log('Listening on ' + port);
});
