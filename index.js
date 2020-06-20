'use strict';
const http = require('http');
const fs = require('fs');
const html = fs.readFileSync('./node-text.html', 'utf8');    // htmlファイルを読み込むためには fs モジュールが必要

const server = http.createServer((req, res) => {
  res.writeHead(200, {
    'Content-Type': 'text/html; charset=utf-8'
  });
  res.write(html);
  res.end();
});

const port = 8000;
server.listen(port, () => {
  console.log('Listening on ' + port);
});
