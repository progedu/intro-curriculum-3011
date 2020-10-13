'use strict';
const http = require('http');
const server = http.createServer((req, res) => {
  res.writeHead(200, {
    'Content-Type': 'text/html; charset=utf-8'
  });
  res.write(
    '<!DOCTYPE html><html lang="ja"><body><h3>あなたのユーザーエージェントを表示しています</h3></body></html>'
  );


  res.write(req.headers['user-agent']);
  res.end();
});
const port = 8000;
server.listen(port, () => {
  console.log('Listening on ' + port);
});
