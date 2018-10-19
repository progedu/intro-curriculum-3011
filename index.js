'use strict';
const http = require('http');
const server = http.createServer((req, res) => {
  res.writeHead(200, {
    'Content-Type': 'text/html; charset=utf-8'
  });
  
  //ユーザーエージェント情報を保存
  let user_agent = req.headers['user-agent'];
  //html文書作成
  let html =
  `<!DOCTYPE html>
     <html lang="ja">
       <body>
         <h1>あなたのブラウザ情報を表示します</h1>
         <h2>${user_agent}</h2>
       </body>
     </html>`;
  res.write(html);
  res.end();
});
const port = 8000;
server.listen(port, () => {
  console.log('Listening on ' + port);
});
