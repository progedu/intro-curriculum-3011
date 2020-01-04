'use strict';
const http = require('http');
const fs = require('fs');

const htmlData = fs.readFileSync('./index.html');
//console.info('htmlData '+ htmlData);
const cssData = fs.readFileSync('./test.css');

const server = http.createServer((req, res) => {
  //test.cssを参照できる
  var url = req.url;
  //console.info('url '+url);
  var tmp = url.split('.');//拡張子で分割
  var ext = tmp[tmp.length - 1];//cssの文字列のみ参照
  //console.info('ext ' +ext);
  //switch文で分岐させる
  switch(ext){
    case 'css'://cssファイルを読み込む
      res.writeHead(200, {
        'Content-Type': 'text/css; charset=utf-8'
      });
      //shift+@のバッククォートで改行にも対応
      res.write(cssData);
      res.end();
      break;
    case '/'://index.htmlを読み込む
      res.writeHead(200, {
        'Content-Type': 'text/html; charset=utf-8'
      });
      //shift+@のバッククォートで改行にも対応
      res.write(htmlData);
      res.end();
      break;
  }
});
const port = 8000;
server.listen(port, () => {
  console.log('Listening on ' + port);
});
