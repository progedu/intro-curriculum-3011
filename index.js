'use strict';
//Node.jsのHTTPモジュールの読み込み
const http = require('http');
//httpモジュールの機能でサーバーを作成
//サーバーには、リクエストを表すオブジェクトの引数reqとレスポンスを表すオブジェクトの引数resを受け取る無名関数を渡します。この無名関数は、リクエストが来た際の挙動を実装しています。
const server = http.createServer((req, res) => {
    //無名関数の中　リクエストが来た際の挙動
    //200は成功を示すステータスコード　あとはレスポンスヘッダ
    //内容の形式 Content-Type が、text/plain という通常のテキストであるという情報 文字セット charset が utf-8 であるという情報
    res.writeHead(200, {
        'Content-Type': 'text/html; charset=utf-8'
    });
    //resオブジェクトのwrite関数　HTTPのレスポンスの内容を書き出す。ここではリクエストヘッダのuser-agentの中身を、レスポンスの内容として書き出しています
    //endメソッドを呼び出し、レスポンスの書き出し終了
    //ユーザーエージェントとは、利用者が HTTP を使って通信を利用する際のソフトウェアまたはハードウェアのことをいいます。
    res.write('<!DOCTYPE html><html lang="ja"><body><h1>HTMLの一番大きい見出しを表示します</h1></body></html>');
    res.end();
})
//HTTPが起動するポートを宣言し、サーバーを起動して起動した際に実行する関数を渡しています。
//listen関数　HTTPサーバーを起動する関数　サーバーが立ち上がると、特定のポートからリクエストがないかずっと聞き耳を立てているためこの名前がついた
const port = 8000;
server.listen(port, () => {
    console.log('Listening on ' + port);
});
