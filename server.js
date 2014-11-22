var express = require('express');
var app = express();
var path = require('path');

app.set('view engine', 'ejs');

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
	    res.render('index.ejs');
	}); 

app.get('/test', function(req, res){
	res.end("hello world")
});

app.listen(3000, function(){
	console.log("Listening on port 3000");
});
