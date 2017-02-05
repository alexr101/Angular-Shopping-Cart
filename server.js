var express = require('express');
var app = express();

app.use(express.static('public'));
app.use(express.static('public/build'))

//Local environment
var port = process.env.PORT ? process.env.PORT : 3000;
app.listen(port);
