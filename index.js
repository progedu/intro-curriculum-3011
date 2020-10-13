'use strict';
const http = require('http');
const server = http.createServer((req, res) => {
  res.writeHead(200, {
    'Content-Type': 'text/html; charset=utf-8'
  });

  const doc = 
  `<!DOCTYPE html>
  <html lang="ja">
    <body>
      <h1>HTMLの一番大きい見出しを表示します</h1>
    </body>
  </html>`
  res.write(doc);

  // res.write('<!DOCTYPE html>\n<html lang="ja">\n<body>\n<h1>HTMLの一番大きい見出しを表示します</h1>\n</body>\n</html>');
  res.end();
});
const port = 8000;
server.listen(port, () => {
  console.log('Listening on ' + port);
});
