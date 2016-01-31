var express = require('express');

var app = express()

app.get('/', function(req, res){
  res.sendFile('../dist/index.html');
});

var port = process.env.PORT || 5050;
app.listen(port, function() {
  console.log("Listening on " + port);
});
