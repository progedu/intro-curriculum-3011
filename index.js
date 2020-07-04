'use strict';
const fs = (require('fs'));
const http = require('http');
const server = http.createServer((req, res) => {
  fs.readFile('./index.html', 'utf-8', doRead);
  function doRead(err,data){
    res.writeHead(200, {
      'Content-Type': 'text/html; charset=utf-8'
    });
    res.write(data);
    res.end();  
  }
});
const port = 8000;
server.listen(port, () => {
  console.log('Listening on ' + port);
});
