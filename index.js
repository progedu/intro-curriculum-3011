'use strict';
const http = require('http');
const server = http.createServer((req, res) => {
  res.writeHead(200, {
    'Content-Type': 'text/html; charset=utf-8'
  });
  res.write('<!DOCTYPE html><html lang="ja"><body><h1>HTTPのステータスコード</h1><ul><li>200: 成功</li><li>300: リダイレクト</li><li>400: クライアントエラー</li><li>500: サーバーエラー</li></ul></body></html>');
  res.end();
});
const port = 8000;
server.listen(port, () => {
  console.log('Listening on ' + port);
});
