'use strict';
const http = require('http');
const server = http.createServer((req, res) => {
  res.writeHead(200, {
    'Content-Type': 'text/html; charset=utf-8'
  });
  res.write('<!DOCTYPE html><html lang="ja"><body><h1>HTMLの一番大きい見出しを表示します</h1><h2>二番目に大きい見出しです</h2><h3>三番目に大きい見出しです</h3></body></html>');
  res.end();
});
const port = 8000;
server.listen(port, () => {
  console.log('Listening on ' + port);
});
