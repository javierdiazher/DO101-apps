var express = require('express');
app = express();

app.get('/', function (req, res) {
  res.send('Hello World!\n');
});

// Coded added from devenv-versioning branch
app.get('/mars', function(req, res) {
  res.send('Hello Mars!\n');
});

app.listen(5454, function () {
  console.log('Example app listening on port 80!');
});

