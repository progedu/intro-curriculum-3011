'use strict';
const html = `<!DOCTYPE html>
<html lang="ja">
  <body>
    <h1>今日のおつまみ候補</h1>
    <ul>
    <li>サンマ</li>
    <li>鶏レバー</li>
    <li>ヤゲン軟骨</li>
    </ul>
  </body>
</html>`;
const http = require('http');
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
