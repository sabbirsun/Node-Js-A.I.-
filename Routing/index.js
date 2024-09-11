const fs = require('fs');
const http = require('http');
const port = 3000;
const hostname = '127.0.0.1';

// Function to handle file reading and responding to the client
const renderPage = (res, filePath, contentType) =>{
    fs.readFile(filePath, (err, data) => {
        if (err) {
            res.writeHead(500, { "Content-Type": "text/plain" });
            res.write("Error: Could not find or open file for reading\n");
        } else {
            res.writeHead(200, { "Content-Type": contentType });
            res.write(data);
        }
        res.end();
    });
}

const server = http.createServer((req, res) => {
    if (req.url == '/') {
        renderPage(res, "./views/index.html", "text/html");
    } else if (req.url == '/about') {
        renderPage(res, "./views/about.html", "text/html");
    } else if (req.url == '/contact') {
        renderPage(res, "./views/contact.html", "text/html");
    } else {
        renderPage(res, "./views/error.html", "text/html");
    }
});

server.listen(port, hostname, () => {
    console.log(`Server is running at http://${hostname}:${port}`);
});
