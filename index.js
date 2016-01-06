'use strict';
let http = require('http');
let server = http.createServer((req, res) => {
	res.writeHead(200, {
		'Content-Type': 'text/plain',
		'charset': 'utf-8'
	});
	res.write('HTMLの一番大きい見出しを表示します');
	res.end();
});
let port = 8000;
server.listen(port, () => {
  console.log('Listening on ' + port);
});
