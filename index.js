'use strict';
const http = require('http');
const fs = require('fs');// ファイルモジュールを読み込む
const server = http.createServer((req, res) => {
  let url = req.url;
  if ('/' == url) {
    fs.readFile('./assessment.html', 'utf-8', function (err, data) {
      res.writeHead(200, {
        'Content-Type': 'text/html; charset=utf-8'
      });
      res.write(data);
      res.end();
    });
  } else if ('/assessment.css' == url) {
    fs.readFile('./assessment.css', 'utf-8', function (err, data) {
      res.writeHead(200, {
        'Content-Type': 'text/css; charset=utf-8'
      });
      res.write(data);
      res.end();
    });
  } else if ('/assessment.js' == url) {
    fs.readFile('./assessment.js', 'utf-8', function (err, data) {
      res.writeHead(200, {
        'Content-Type': 'text/js; charset=utf-8'
      });
      res.write(data);
      res.end();
    });
  }
});

const port = 8000;
server.listen(port, () => {
  console.log('Listening on ' + port);
});