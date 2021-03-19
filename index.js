'use strict';
const http = require('http');
const server = http.createServer((req, res) => {
  res.writeHead(200, {
    'Content-Type': 'text/html; charset=utf-8'
  });
  res.write(`<!DOCTYPE html><html lang="ja"><body><h1>req.headersの情報をHTMLで表示しています</h1><p><font color="blue">${JSON.stringify(req.headers)}</font></p></body></html>`);
  res.end();
});
const port = 8000;
server.listen(port, () => {
  console.log('Listening on ' + port);
});