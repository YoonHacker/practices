"use strict";

var http = require('http');

var fs = require('fs');

var filecontent = fs.readFileSync('cssgrid6.html');
var server = http.createServer(function (req, res) {
  res.writeHead(200, {
    'Content-type': 'text/html'
  });
  res.end(filecontent);
});
server.listen(80, '127.0.0.1', function () {
  console.log("Listening on port 80");
});