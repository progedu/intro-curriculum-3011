'use strict';
const http = require('http');
const server = http.createServer((req, res) => {
  res.writeHead(200, {
    'Content-Type': 'text/html; charset=utf-8'
  });
  res.write(`<!DOCTYPE html>
  <html lang="ja">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Document</title>
  </head>
  <body>
      <h1>好きな動画</h1>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/1at7kKzBYxI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      <h2>全く話は変わるが、バッククオテーションは改行にも対応</h2>
  </body>
  </html>`);
  res.end();
});
const port = 8000;
server.listen(port, () => {
  console.log('Listening on ' + port);
});
