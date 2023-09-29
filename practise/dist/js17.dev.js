"use strict";

console.log("hello world");

var http = require('http');

var hostname = '127.0.0.1';
var port = 3000;
var server = http.createServer(function (req, res) {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html'); // res.end('Hello Vivek Garari');

  res.end("<!DOCTYPE html>\n    <html lang=\"en\">\n    \n    <head>\n        <meta charset=\"UTF-8\">\n        <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n        <title>Display Property</title>\n        <style>\n            .top {\n                border: 2px solid rgb(223, 168, 168);\n                /* margin: auto;\n                width: 1200px; */\n            }\n            \n            header {\n                margin: auto;\n                /* border: 3px soid red; */\n                /* width: 15%; */\n                width: 1200px;\n            }\n            \n            img {\n                margin: auto;\n                display: block;\n                width: 34px;\n            }\n            \n            h3 {\n                text-align: center;\n                font-family: Georgia, 'Times New Roman', Times, serif;\n                margin: auto;\n                /* width: 1200px; */\n            }\n            \n            .box {\n                border: 4px solid rgb(0, 0, 0);\n                background-color: gray;\n                margin-top: 4px;\n                padding: 23px;\n                display: inline-block;\n                width: 33%;\n                box-sizing: border-box;\n                display: inline-block;\n            }\n            \n            .container {\n                margin: auto;\n                width: 1200px;\n            }\n        </style>\n    </head>\n    \n    <body>\n        <header class=\"top\">\n            <img src=\"/download.jfif\" alt=\"\">\n            <h3>This is my website</h3>\n        </header>\n        <div class=\"container\">\n            <div class=\"box\">\n                <h4 class=\"heading\">Heading</h4>\n                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit quae explicabo laboriosam amet, tempore assumenda perspiciatis minus delectus! Quibusdam asperiores officiis excepturi aperiam ratione aliquam similique quidem qui. Voluptatem\n                    maiores suscipit fuga velit nobis.\n                </p>\n            </div>\n            <div class=\"box\">\n                <h4 class=\"heading\">Heading</h4>\n                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit quae explicabo laboriosam amet, tempore assumenda perspiciatis minus delectus! Quibusdam asperiores officiis excepturi aperiam ratione aliquam similique quidem qui. Voluptatem\n                    maiores suscipit fuga velit nobis.\n                </p>\n            </div>\n            <div class=\"box\">\n                <h4 class=\"heading\">Heading</h4>\n                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit quae explicabo laboriosam amet, tempore assumenda perspiciatis minus delectus! Quibusdam asperiores officiis excepturi aperiam ratione aliquam similique quidem qui. Voluptatem\n                    maiores suscipit fuga velit nobis.\n                </p>\n            </div>\n    \n        </div>\n    </body>\n    \n    </html>");
});
server.listen(port, hostname, function () {
  console.log("Server running at http://".concat(hostname, ":").concat(port, "/"));
});