//var http = require('http');
var express = require('express');
var app = express();

app.use(express.static('public'));

var server = app.listen(process.env.PORT || 3000, function() {
    var port = server.address().port;
    console.log('Listening on port: ', port);
});



////express(function(req, res){
//    res.writeHead(200);
//    res.write("Hello world");
//    res.end();
//}).listen(process.env.PORT || 3000);