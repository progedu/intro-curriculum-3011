'use strict'; // RLogin で echo "'use strict';" > index.js を実行して作った。
const http = require('http'); // Node.js で用意されている http サーバーを作るのに便利な http というモジュールをリクワイヤーしている。
const server = http.createServer((req, res) => { // API を使って、createServer を行なうと、サーバーが作れる。req（リクエストには、こちらクライアント側の情報 IP アドレスなどが入っている）を出すと、res（レスポンス、返事？）が返ってくる。返ってくるレスポンスは細かく設定できる。
    res.writeHead(200, { // http 通信には基本的に、ヘッダーとボディーがあり、ヘッダーにはこれから送るデータの説明を入れる。ステータスコード 200 を設定。
        'Content-Type': 'text/html; charset=utf-8' // text/plain html とかではなく、text を返すように指定。charset=utf-8 文字コードは文字化けしない utf-8。
    });
    res.write('<!DOCTYPE html><html lang="ja"><body><h1>🎌HTMLの一番大きい見出しを表示します🎌</h1></body></html>'
    ); // res.write がボディー。req.headers リクエストから受け取った user-agent ユーザーエージェントをそのまま返す。
    res.end(); // 通信終了。
});
const port = 8000; // ポートを 8000番で起動するよう指定。ポート 80番は開けっ放しにすると、あまり良くない。
server.listen(port, () => {
    console.log(`Listening on ${port}`); // サーバーが起動した時のコールバック。バッククォーテーション `` で囲うと、その中の ${} は、'' + 〇〇と同じ動きとなる。
}); // この 3行で起動。
