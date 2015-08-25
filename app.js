var http = require('http');
var express = require('express');


Express.createServer(function(req, res){
    res.writeHead(200);
    res.write("Hello world");
    res.end();
}).listen(process.env.PORT || 3000);