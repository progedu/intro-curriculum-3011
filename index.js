'use strict';
const http = require('http');
const { uname } = require('node-uname')
const server = http.createServer((req, res) => {
  res.writeHead(200, {
    'Content-Type': 'text/html; charset=utf-8'
  });
  res.write('<!DOCTYPE html> <html lang="ja"> <body> <h1> Kernel:' + uname().release + '</h1> <br> <h1> HTMLの一番大きい見出しを表示します</h1> </body> </html>');
  res.end();
});
const port = 8000;
server.listen(port, () => {
  console.log('Listening on ' + port);
});
