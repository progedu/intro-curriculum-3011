'use strict';
const http = require('http');
const server = http.createServer((req, res) => {
  res.writeHead(200, {
    'Content-Type': 'text/html; charset=utf-8'
  });
  const data = '<!DOCTYPE html>' +
    '<html lang="ja">' +
    '  <body>' +
    '    <h1>HTML の一番大きな見出しを表示します</h1>' +
    '  </body>' +
    '</html>'
  res.write(data);
  res.end();
});
const port = 8000;
server.listen(port, () => {
  console.log('Listening on ' + port);
});
