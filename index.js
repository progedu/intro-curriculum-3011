'use strict';
const http = require('http');
const server = http.createServer((req, res) => {
  res.writeHead(200, {
    'Content-Type': 'text/html; charset=utf-8'
  });
  let html = `
  <!DOCTYPE html>
  <html lang = "ja">
  <body>
  <h1 style="color:hotpink;">HTMLの一番大きい見出しを表示します</h1>
  </body>
  </html>
  `;
  res.write(html);
  res.end();
});
const port = 8000;
server.listen(port, () => {
  console.log('Listening on ' + port);
});
