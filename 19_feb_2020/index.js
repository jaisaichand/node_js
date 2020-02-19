var express = require("express");

var app = new express();
var port = 9099;
app.get("/user",function(req,resp){
    resp.send("hello");
})

app.get("/",function(req,resp){
    resp.send("Default");
})

app.listen(port,function(){
    console.log("server started at "+port);
})