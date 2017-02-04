var express = require('express');
var app = express();

app.use(express.static('public'));
app.use(express.static('public/build'))

app.listen(3000);