var express = require('express');
const path = require('path')

var app = express()

/*app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});*/

app.use('/', express.static(__dirname ));

app.get('*', function (request, response){
  response.sendFile(path.resolve(__dirname, 'index.html'))
})

var port = process.env.PORT || 5050;
app.listen(port, function() {
  console.log("Listening on " + port);
});
