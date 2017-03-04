'use strict';
const http = require('http');
const server = http.createServer((req, res) => {
  res.writeHead(200, {
    'Content-Type': 'text/html; charset=utf-8'
    // 解答と同じ charset の書き方だと日本語が文字化けしてしまいましたが、
    // 上の書き方で改善しました。
  });
  res.write(req.headers['user-agent']);
  res.write('<!DOCTYPE html><html lang="ja"><body><h1>HTMLの一番大きい見出しを表示します</h1></body></html>');
  res.end();
});
const port = 8000;
server.listen(port, () => {
  console.log('Listening on ' + port);
});
