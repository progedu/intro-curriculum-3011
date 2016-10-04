'use strict';
const http = require('http');
const server = http.createServer((req, res) => {
  res.writeHead(200, {
    'Content-Type': 'text/html',
    'charset': 'utf-8'
  });
  const head = '<head><meta charset="UTF-8"><title>HTTP サーバー - 練習問題 ｜ N予備校</title></head>';
  const body = '<body><h1>HTMLの一番大きい見出しを表示します</h1></body>';
  const html = '<!DOCTYPE html><html lang="ja">' + head + body + '</html>';
  res.write(html);
  res.end();
});
const port = 8000;
server.listen(port, () => {
  console.log('Listening on ' + port);
});

