'use strict';
const http = require('http');
const server = http.createServer((req, res) => {
  res.writeHead(200, {
    'Content-Type': 'text/html; charset=utf-8'
  });
  res.write('<!DOCTYPE html><html lang="ja"><body><h1>HTMLの一番大きい見出しを表示します</h1></body></html><!DOCTYPE html><html lang="ja"><body><h2>HTMLの二番目に大きい見出しを表示します</h2></body></html><!DOCTYPE html><html lang="ja"><body><h3>HTMLの三番目に大きい見出しを表示します</h3></body></html><!DOCTYPE html><html lang="ja"><body><h4>HTMLの四番目に大きい見出しを表示します</h4></body></html><!DOCTYPE html><html lang="ja"><body><h5>HTMLの五番目に大きい見出しを表示します</h5></body></html>');
  res.end();
});
const port = 8000;
server.listen(port, () => {
  console.log('Listening on ' + port);
});
