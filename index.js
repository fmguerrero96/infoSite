const http = require('http')
const fs = require('fs');
const port = 8080

const server = http.createServer((req, res) => {
    const url = req.url
    const pages = ['./pages/index.html', './pages/about.html',
     './pages/contact.html', './pages/404.html' ]
    const filePaths = ['/index', '/about', '/contact']

    if (!filePaths.includes(url)) {
        fs.readFile(pages[3], (error, data) => {
            res.writeHead(404)
            res.write(data)
            res.end()
        })
    } else if (url === filePaths[0] || url === '') {
        fs.readFile(pages[0], (error, data) => {
            res.write(data)
        })
    } else if (url === filePaths[1]) {
        fs.readFile(pages[1], (error, data) => {
            res.write(data)
        })
    } else if (url === filePaths[2]) {
        fs.readFile(pages[2], (error, data) => {
            res.write(data)
        })
    }
});

server.listen(port, (error) => {
    if(error){
        console.log('something went wrong')
    } else {
        console.log('server listenging on port ' + port)
    }
})