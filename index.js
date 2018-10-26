'use strict';

// HTTPモジュールの読み込み
const http = require('http');

// モジュールhttpを用いて、サーバーを作成
const server = http.createServer((req, res) => { // リクエストとレスポンスを引数に受ける
    // サーバーにリクエストがあった時に呼び出されるコールバック関数
    // writeHeadで、レスポンスヘッダを書き込む
    res.writeHead(200, { // 200は成功を表すステータスコード
        'Content-Type': 'text/html; charset=utf-8'// ここに内容の形式についての説明を記述 他の例「text/plane」
    });
    // write関数で、HTTPレスポンスの内容を書き出す
    res.write('<!DOCTYPE html><html lang="ja"><body><h1>HTMLの一番大きい見出しを表示します</h1></body></html>');
    res.end();
});

// このHTTPが起動するポートを宣言し、サーバーを起動
const port = 8000;
server.listen(port, () => {
    // サーバーを起動時に実行されるコールバック関数
    console.log('Listening on ' + port);
});