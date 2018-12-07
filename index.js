'use strict';
const http = require('http');
const server = http.createServer((req, res) => {
  res.writeHead(200, {
    'Content-Type': 'text/html; charset=utf-8'
  });
  res.write('<!DOCTYPE html><html lang="ja"><body><h1>HTMLの一番大きい見出しを表示しています</h1></body></html>');
//  res.write('&lt;!DOCTYPE html&gt;&lt;html lang="ja"&gt;&lt;body&gt;&lt;h1&gt;HTMLの一番大きい見出しを表示しています&lt;/h1&gt;&lt;/body&gt;&lt;/html&gt;');
  res.end();
});
const port = 8000;
server.listen(port, () => {
  console.log('Listening on ' + port);
});
