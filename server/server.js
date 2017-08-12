var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var port = 5000;
var toDoList = require('./routes/toDoListRoute');

app.use(express.static('server/public'));
app.use(bodyParser.urlencoded({extended: true}));
app.listen(port, function(){
    console.log('app is lisetning on port', port);
})

app.use('/toDoListRoute', toDoList);
