'use strict';
const http = require('http');
const server = http.createServer((req, res) => {
  res.writeHead(200, {
    'Content-Type': 'text/html; charset=utf-8'
  });
  res.write(`
    <!DOCTYPE html>
    <html lang="ja">
      <body>
        <h3>だんだん</h3>
        <h2>大きく</h2>
        <h1>なりましたか？</h1>
      </body>
    </html>`
  );
  res.end();
});
const port = 8000;
server.listen(port, () => {
  console.log('Listening on ' + port);
});
