'use strict';
const http = require('http');
const resContent = new Array();

// レスポンス内容
resContent.push('<!DOCTYPE html>\n');
resContent.push('<html lang="ja">\n');
resContent.push('    <body>\n');
resContent.push('        <h1>HTMLの一番大きい見出しを表示します</h1>\n');
resContent.push('    </body>\n');
resContent.push('</html>');

const server = http.createServer((req, res) => {
  res.writeHead(200, {
    'Content-Type': 'text/html; charset=utf-8'
  });
  res.write(resContent.toString());
  res.end();
});
const port = 8000;
server.listen(port, () => {
  console.log('Listening on ' + port);
});
