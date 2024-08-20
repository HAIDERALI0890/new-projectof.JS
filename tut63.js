const { createServer } = require('node:http');

const hostname = '127.0.0.1';
const port = 3000;

const server = createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  //res.end('Hello World Haider welcome');
  res.end(`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    
</body>
</html>
    <title>pseudo selectors and more esigning </title>
    <style>
        .container {
            border: 9px solid gray;
            background-color: antiquewhite;
            padding: 35px;
            margin: 34px auto;
            width: 666px;
        }

        a {
            text-decoration: none;
            color: black;
        }

        a:hover {
            color: aquamarine;
            background-color: deepskyblue;
        }

        a:visited {
            color: chartreuse;
        }

        a:active {
            background-color: cadetblue;
        }

        .btn {
            font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
            background-color: rgb(141, 165, 165);
            padding: 13px;
            border: none;
            cursor: pointer;
            font-size: 12px;
            border-radius: 4px;


        }

        .btn:hover {
            color: darksalmon;
            background-color: hotpink;
        }

        .btn:hover {
            color: royalblue;
            background-color: deepskyblue;
        }
    </style>
</head>

<body>
    <div class="container" id="cont1">
        <h3>This is my Heading</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore quod iure laborum similique, corrupti
            dolorem explicabo officiis itaque repellat molestiae libero. Deleniti facilis quam asperiores? Corrupti
            doloribus, aliquam consectetur accusantium molestiae earum delectus tenetur!</p>
        <a href="https://google.com" class="btn">Read more</a>
        <button class="btn">Contact us</button>
    </div>
</body>

</html>`);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});