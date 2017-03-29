// 
var express = require('express')
var app = express()

var dbtest1 = require('./src/database').dbtest1;
var dbtest2 = require('./src/database').dbtest2;

// dbtest();
// dbtest2();

app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})