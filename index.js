'use strict';
var http = require('http');
var fs = require('fs');

var server = http.createServer((req, res) => {
  fs.readFile('./firstnode.html','utf-8',function(error,data){
  res.writeHead(200, {
    'Content-Type': 'text/html'
  });
  res.write(data);
  res.end();
});
});

const port = 8000;
server.listen(port, () => {
  console.log('Listening on ' + port);
});
