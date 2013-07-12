var npm = require('npm');
var express = require('express');
var fs = require('fs');
var text = fs.readFileSync('index.html','utf8')
var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  response.send("WTF");
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
