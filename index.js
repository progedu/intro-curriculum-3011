'use strict';
const http = require('http');
const server = http.createServer((req, res) => {
  res.writeHead(200, {
    'Content-Type': 'text/html; charset=utf-8'
  });
  const html = `
  <!DOCTYPE html>
  <html lang="ja">
  <head>
    <meta charset="UTF-8">
    <title>HTTPサーバを改良してHTMLを表示</title>
  </head>
  <body>
    <h1>HTTPサーバを改良してHTMLを表示</h1>
  </body>
  </html>
  `;//行儀の悪い書き方かもしれないけど実験
  res.write(html);
  res.end();
});
const port = 8000;
server.listen(port, () => {
  console.log('Listening on ' + port);
});
