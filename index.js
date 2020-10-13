'use strict';
// const http = require('http');
// const fs = require('fs');
// const data = fs.readFileSync('./a.html');
// const server = http.createServer((req, res) => {
//   res.writeHead(200, {
//     'Content-Type': 'text/html; charset=utf-8'
//   });
//   res.write(data);
//   res.end();
// });
// const port = 8000;
// server.listen(port, () => {
//   console.log(`Listening On ${port}`);
// });


// const http = require('http');
// const fs = require('fs');

// fs.readFile('./a.html', (err, data) => {
//   if (err) {
//     throw err;
//   }
//   http.createServer((req, res) => {
//     res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
//     res.write(data);
//     res.end();
//   }).listen(8000);
//   console.log(`Server Running...`);
// });


const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
  if(req.url === '/') {
    fs.readFile('./b.html', 'utf-8', (err, html) => {
      res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
      res.write(html);
      res.end();
    });
  } else if (req.url.match('\.css$')) {
    const rs = fs.createReadStream('./style.css', 'utf-8');
    res.writeHead(200, { 'Content-Type': 'text/css; charset=utf-8' });
    rs.pipe(res);
  } else {
    res.writeHead(404, {'Content-Type': 'text/html; charset=utf-8' });
    res.end('No Page Found');
  }
});

const port = 8000;
server.listen(port, () => {
  console.log(`Sever Running...${port}`);
});
