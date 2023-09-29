"use strict";

var http = require('http');

var fs = require('fs');

var hostname = '127.0.0.1';
var port = 3000;
var home = fs.readFileSync('./index.html');
var about = fs.readFileSync('./about.html');
var services = fs.readFileSync('./services.html');
var contact = fs.readFileSync('./contact.html');
var server = http.createServer(function (req, res) {
  console.log(req.url);
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end(home);
});
server.listen(port, hostname, function () {
  console.log("Server running at http://".concat(hostname, ":").concat(port, "/"));
});