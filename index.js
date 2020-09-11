'use strict';
// Node.jsにおけるHTTPモジュールを読み込む
const http = require('http');
/* サーバーを作成、関数はサーバーにリクエストがあった際に呼び出される。
   リクエスト:req
   レスポンス:res
*/
const server = http.createServer((req, res) => {
  // 200という成功ステータスとともに、レスポンスヘッダを書き込む
  res.writeHead(200, {
    'Content-Type': 'text/html; charset=utf-8'
  });
  /* resオブジェクトのwrite関数はHTTPレスポンスの内容を書き出す。
     リクエストヘッダのuser-agentの中身を、レスポンスの内容として書き出す
  */
  // res.write(req.headers['user-agent']);

  res.write('<!DOCTYPE html><html lang="ja"><body><h1>HTMLの一番大きい見出しを表示します</h1></body></html>');

  // endメソッドを呼び出してレスポンスの書き出しを終了する
  res.end();
});
// HTTPが起動するポートを宣言
const port = 8000;
// listen関数でサーバーを起動、特定のポートからリクエストがないかをずっと聞き耳を立てる
server.listen(port, () => {
  console.log('Listening on' + port);
});
