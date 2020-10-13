'use strict';
const http = require('http');
const fs = require('fs');//fsモジュール呼び出し。

const server = http.createServer((req, res) => {
  //ファイル読み込み。
  fs.readFile('./html/index.html', 'UTF-8',  (err, data) => {
    //エラーのログを出す。
    if (err) {
      console.log('ファイルを読み込むことができませんでした。');
    }
    //書き出し。
    res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
    res.write(data);
    res.end();
  });
});

const port = 8000;
server.listen(port, () => {
  console.log('Listening on ' + port);
});