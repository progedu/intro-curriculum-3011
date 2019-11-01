'use strict'

const http = require('http');

const fs = require('fs');
const htmlData = fs.readFilleSync('./index.html');
 // 事前に準備した html ファイルを読み込んで定義しておく

const server = http.createServer((req, res) => {
  res.writeHead(200, {
    'Content-Type': 'text/html; charset=utf-8'
  });
  res.write(htmlData);
   // 定義しておいた html ファイルを表示
  res.end();
});

const port = 8000;
server.listen(port, () => {
  console.log('Listening on ' + port);
});
