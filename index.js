'use strict';
const http = require('http');
const server = http.createServer((req, res) => {
  res.writeHead(200, {
    'Content-Type': 'text/html; charset=utf-8'
  });
  const html = `<!DOCTYPE html>
  <html lang="ja">
    <body>
      <h1 style=color:darkviolet;>h1タグ</h1>
      <h2 style=color:darkorchid >h2タグ</h2>
      <h3 style=color:mediumorchid>h3タグ</h3>
    </body>
  </html>`
  res.write(html);
  res.end();
});
const port = 8000;
server.listen(port, () => {
  console.log('Listening on ' + port);
});
