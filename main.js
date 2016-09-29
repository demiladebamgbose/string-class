var express = require('express'),
    http = require('http');
var app = express();

app.use(express.static('public'));

app.get('/', function (req, res) {
    res.sendFile('__dirname' + '/public/index.html');
  });



http.createServer(app).listen(8080);
