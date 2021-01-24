'use strict';

// httpのモジュールを読み込む
const http = require('http');

// サーバーを作成
const server = http.createServer((req, res) => {
    // レスポンスヘッダ
    res.writeHead(200, {
        'Content-Type' : 'text/html; charset=utf-8'
    });
    // レスポンスの内容
    res.write('<!DOCTYPE html><html lang="ja"><body><h1>HTMLの一番大きい見出しを表示します</h1></body></html>');
    // レスポンスの書き出し終了
    res.end();
});

// httpが起動するポートを設定
const port = 8000;
// サーバーを起動
server.listen(port, () => {
    console.log('Listening on ' + port);
});
