var express = require('express'),
    app = express();

app.use(express.static('public'));

app.get('/', function (req, res) {
    res.sendFile('__dirname' + '/public/index.html');
  });

app.listen(8080, function () {
  console.log('Server started on port 8080');
});
