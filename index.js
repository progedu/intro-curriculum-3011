"use strict";

const http = require("http");
const server = http.createServer((req, res) => {
  res.writeHead(200, {
    "Content-Type": "text/html; charset='utf-8",
  });
  res.write(
    `<!DOCTYPE html><html lang="ja"><body><marquee behavior="alternate" direction="up" height="30"><marquee direction="right"><h3>元気ですか〜！</h1></marquee></marquee></body></html>`
  );
  res.end();
});
const port = 8000;
server.listen(port, () => {
  console.log(`Listening on ${port}`);
});
