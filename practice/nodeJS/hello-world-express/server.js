/*

server.js

A simple setup for nodeJS with express.
Written by Andrea Law

*/

var express = require('express');
var app = express();

app.get('/', function (req, res) {
   res.send('Hello World with nodeJS and express');
   console.log(req);
})

var server = app.listen(8081, function () {
   var port = server.address().port;
   
   console.log("Example app listening at http://localhost:%s", port);
})