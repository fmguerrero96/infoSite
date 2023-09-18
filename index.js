const http = require('http')
const fs = require('fs')
const port = 8080

const server = http.createServer((req, res) => {
    
});

server.listen(port, (error) => {
    if(error){
        console.log('something went wrong')
    } else {
        console.log('server listenging on port ' + port)
    }
})