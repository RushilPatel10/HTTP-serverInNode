// const fs = require("fs")
const http = require('http')
const express = require("express");
const exp = require('constants');
// const os = require("os")
// const url = require("url")

const app = express();

app.get("/", (req, res) => {
    return res.send("Home Page");
});

app.get("/about", (req, res) => {
    return res.send("Hey " + req.query.name);
});

app.get("/signup", (req, res) => {
    return res.send("Signup Page ");
});

app.listen(8000, () => console.log("Server started"))

// const myServer = http.createServer(app);


// console.log("helloooooo")
// fs.writeFileSync('./test.txt','hey there!!!')
// fs.writeFileSync('./test.txt', 'hey there sync!!!', (err) => { })

// fs.appendFileSync("./test.txt", `${Date.now()} hey there\n`)

// console.log(os.cpus().length);

// console.log(fs.statSync("./test.txt"));

// const myServer = http.createServer((req, res) => {
//     if (req.url === "/favicon.ico") return res.end();
//     const log = `${Date.now()}: ${req.method} ${req.url} new req received\n`;
//     const myUrl = url.parse(req.url, true);
//     fs.appendFile("test.txt", log, (err, data) => {
//         switch (myUrl.pathname) {
//             case '/':
//                 if (req.method === 'GET') res.end('Home page')
//                 break;
//             case '/about':
//                 const username = myUrl.query.myName;
//                 res.end(`hi, ${username}`);
//                 break;
//             case '/search':
//                 const search = myUrl.query.search_query;
//                 res.end("result for " + search);
//                 break;
//             case '/signup':
//                 if (req.method === 'GET') res.end('This is a signup form')
//                 else if (req.method === "post") {
//                     // database query
//                     res.end("Success!")
//                 }
//             default: res.end("404")
//                 break;
//         }
//     })
// });
