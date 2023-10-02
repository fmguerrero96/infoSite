const express = require("express");
const app = express();
const port = 8080;

app.use(express.static("pages"));

app.get("/", function (req, res) {
    res.sendFile(__dirname + "/pages/index.html");
});

app.get("/contact", function (req, res) {
    res.sendFile(__dirname + "/pages/contact.html");
});

app.get("/about", function (req, res) {
    res.sendFile(__dirname + "/pages/about.html");
});

app.get("*", function (req, res) {
    res.sendFile(__dirname + "/pages/404.html");
});

app.listen(port, (error) => {
    if(error){
        console.log('something went wrong')
    } else {
        console.log('server listenging on port ' + port)
    }
})