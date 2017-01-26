'use strict';
const http = require('http');
let body = "<!DOCTYPE html><html lang=\"ja\"><body><h1>HTMLの一番大きい見出しを表示します</h1><br><p>pタグを表示します</p></body></html>";
const server = http.createServer((req, res) => {
  res.writeHead(200, {
    'Content-Type': 'text/html',
    'charset': 'utf-8'
  });
  res.write(body);
  res.end();
});
const port = 8000;
server.listen(port, () => {
  console.log('Listening on ' + port);
});


