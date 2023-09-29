// Synchronous or blocking
// -line by line execution
const fs = require("fs");
let text = fs.readFile("delete.txt", "utf-8", (err, data) => {
    console.log(err, data);
});
console.log("This is a message");

// Asynchronous or non-blocking
// -line by line execution not guaranteed
// -callback will fire