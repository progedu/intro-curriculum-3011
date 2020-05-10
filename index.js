'use strict';
const http = require('http');
//serverをどういうタイプにするかをまず定義している
const server = http.createServer((req, res) => {
    //200という成功を示すステータスコードと共に、 レスポンスヘッダを書き込んでいます。
    res.writeHead(200, {
    'Content-Type': 'text/html; charset=utf-8'
  });
  //res オブジェクトの、 write 関数は HTTP のレスポンスの内容を書き出します。
  // ここではリクエストヘッダの user-agent の中身を、レスポンスの内容として書き出しています。
  res.write('<!DOCTYPE html><html lang="ja"><body><h1>HTMLの一番大きい見出しを表示します</h1></body></html>');
  res.end();
});
const port = 8000;
//実質的に起動させるのはここ
//前にPort8,000番を開ける設定をVagrantでしているから今回は使えるよ
server.listen(port, () => {
  console.log('Listening on ' + port);
});