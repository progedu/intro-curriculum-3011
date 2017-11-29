'use strict';
const http = require('http');
const fs = require('fs');
const server = http.createServer((req, res) => {
  
  //ファイルを読み込んで、callback関数を実行
  fs.readFile('./test.html', 'utf-8', doReard);

  //コンテンツを実行
  function doReard(err, data) {
  res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
  res.write(data);
  res.end();
  }
});
const port = 8000;
server.listen(port, () => {
  console.log('Listening on ' + port);
});