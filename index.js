'use strict';
const http = require('http');
const server = http.createServer((req, res) => {
  res.writeHead(200, {
    // HTML を表示させるので text/plain ではなく text/html
    'Content-Type': 'text/html; charset=utf-8'
  });
  // HTML を取り出して、レスポンスの body に書き込む
  res.write(
    '<!DOCTYPE html><html lang="ja"><body><h1>HTMLの一番大きい見出しを表示します</h1></body></html>'
);
  res.end();
});
const port = 8000;
server.listen(port, () => {
  console.log('Listening on ' + port);
});
