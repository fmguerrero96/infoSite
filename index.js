const express = require("express");
const app = express();
const port = 8080;

app.use(express.static("pages"));

app.get("/", function (req, res) {
    res.sendFile(__infoSite + "/pages/index.html");
});

app.listen(port, (error) => {
    if(error){
        console.log('something went wrong')
    } else {
        console.log('server listenging on port ' + port)
    }
})