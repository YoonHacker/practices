console.log("hello world");

const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    // res.end('Hello Vivek Garari');
    res.end(`<!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Display Property</title>
        <style>
            .top {
                border: 2px solid rgb(223, 168, 168);
                /* margin: auto;
                width: 1200px; */
            }
            
            header {
                margin: auto;
                /* border: 3px soid red; */
                /* width: 15%; */
                width: 1200px;
            }
            
            img {
                margin: auto;
                display: block;
                width: 34px;
            }
            
            h3 {
                text-align: center;
                font-family: Georgia, 'Times New Roman', Times, serif;
                margin: auto;
                /* width: 1200px; */
            }
            
            .box {
                border: 4px solid rgb(0, 0, 0);
                background-color: gray;
                margin-top: 4px;
                padding: 23px;
                display: inline-block;
                width: 33%;
                box-sizing: border-box;
                display: inline-block;
            }
            
            .container {
                margin: auto;
                width: 1200px;
            }
        </style>
    </head>
    
    <body>
        <header class="top">
            <img src="/download.jfif" alt="">
            <h3>This is my website</h3>
        </header>
        <div class="container">
            <div class="box">
                <h4 class="heading">Heading</h4>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit quae explicabo laboriosam amet, tempore assumenda perspiciatis minus delectus! Quibusdam asperiores officiis excepturi aperiam ratione aliquam similique quidem qui. Voluptatem
                    maiores suscipit fuga velit nobis.
                </p>
            </div>
            <div class="box">
                <h4 class="heading">Heading</h4>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit quae explicabo laboriosam amet, tempore assumenda perspiciatis minus delectus! Quibusdam asperiores officiis excepturi aperiam ratione aliquam similique quidem qui. Voluptatem
                    maiores suscipit fuga velit nobis.
                </p>
            </div>
            <div class="box">
                <h4 class="heading">Heading</h4>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit quae explicabo laboriosam amet, tempore assumenda perspiciatis minus delectus! Quibusdam asperiores officiis excepturi aperiam ratione aliquam similique quidem qui. Voluptatem
                    maiores suscipit fuga velit nobis.
                </p>
            </div>
    
        </div>
    </body>
    
    </html>`);
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});