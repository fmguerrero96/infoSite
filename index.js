const http = require('http')
const fs = require('fs');
const port = 8080

const server = http.createServer((req, res) => {
    const url = req.url
    let fileName

    if (url === '/index') {
        fileName = './pages/index.html';
    } else if (url === '/about') {
        fileName = './pages/about.html';
    } else if (url === '/contact') {
        fileName = './pages/contact.html';
    } else if (url === '/') {
        fileName = './pages/index.html'; 
    } else {
        fileName = './pages/404.html';
    }

    fs.readFile(fileName, (error, data) => {
        if (error) {
            res.writeHead(404);
            res.end('Error: File not found');
        } else {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(data);
        }
    });
});

server.listen(port, (error) => {
    if(error){
        console.log('something went wrong')
    } else {
        console.log('server listenging on port ' + port)
    }
})