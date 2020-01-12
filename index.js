'use strict'
// HTTPモジュール
const http = require('http')
// HTTPサーバーの作成　サーバーにリクエストがあった際に呼び出される
const server = http.createServer((req, res) => {
  // レスポンスヘッダ書き込み
  res.writeHead(200, {
    'Content-Type': 'text/html; charset=utf8'
  })
  // user-agentをレスポンスの内容として書き出し
  // user-agent = 利用者が HTTP を使って通信を利用する際のソフト（ハード）ウェア
  //res.write(req.headers['user-agent'])
  res.write(
    '<!DOCTYPE html><html lang="ja"><body><h1>HTMLの一番大きい見出しを表示します</h1></body></html>'
  )

  // レスポンスの書き出しを終了
  res.end()
})
const port = 8000
// サーバー起動（8000番ポートからのアクセスがないかずっと聞き耳を立てる）
server.listen(port, () => {
  console.log('Listening on' + port)
})
