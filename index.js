const fs = require("fs")
const http = require('http')
const os = require("os")
const url = require("url")

// console.log("helloooooo")
// fs.writeFileSync('./test.txt','hey there!!!')
// fs.writeFileSync('./test.txt', 'hey there sync!!!', (err) => { })

// fs.appendFileSync("./test.txt", `${Date.now()} hey there\n`)

// console.log(os.cpus().length);

// console.log(fs.statSync("./test.txt"));

const myServer = http.createServer((req, res) => {
    if (req.url === "/favicon.ico") return res.end();
    const log = `${Date.now()}: ${req.method} ${req.url} new req received\n`;
    const myUrl = url.parse(req.url, true);
    fs.appendFile("test.txt", log, (err, data) => {
        switch (myUrl.pathname) {
            case '/':
                if (req.method === 'GET') res.end('Home page')
                break;
            case '/about':
                const username = myUrl.query.myName;
                res.end(`hi, ${username}`);
                break;
            case '/search':
                const search = myUrl.query.search_query;
                res.end("result for " + search);
                break;
            case '/signup':
                if (req.method === 'GET') res.end('This is a signup form')
                else if (req.method === "post") {
                    // database query
                    res.end("Success!")
                }
            default: res.end("404")
                break;
        }
    })
});
myServer.listen(8000, () => console.log("Server started"));