'use strict';
const http = require ('http');
const fs = require('fs');
const filePath = './index.html';
const data =fs.readFileSync(filePath, 'utf8');

const server = http.createServer((req,res)=>{
    res.writeHead(200,{
        'Contet-Type': 'text/html; charset=utf-8'
    });
    res.write(data);
    res.end();
});


const port = 8000;
server.listen(port,()=>{
    console.log(`Listening on ${port}`)
}) ;
