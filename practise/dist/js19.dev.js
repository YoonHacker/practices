"use strict";

// Synchronous or blocking
// -line by line execution
var fs = require("fs");

var text = fs.readFile("delete.txt", "utf-8", function (err, data) {
  console.log(err, data);
});
console.log("This is a message"); // Asynchronous or non-blocking
// -line by line execution not guaranteed
// -callback will fire