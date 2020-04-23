var express = require("express");
var app = express();
app.get("/",(req, res)=>{
    //res.status(200).send("Hello World")
    res.writeHead(200); 
    res.write("Hello World OF THE END");
    res.end();
});

app.listen(3030);