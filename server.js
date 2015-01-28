var express = require('express');
var app = express();
var path = require('path');
var request = require('request');

app.set('view engine', 'ejs');

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
	    res.render('index.ejs');
	}); 

app.get('/pics', function(req, res){
	console.log("route for pics hit")
	url = "https://api.instagram.com/v1/media/popular?client_id=72e9a921a5b14994adc6e7dc48de1f31";
	request(url, function(error, response, body){
		if (!error && response.statusCode == 200) {
			parsedBody = JSON.parse(body);
			res.send(parsedBody.data)
		}
	});
});

app.listen(3000, function(){
	console.log("Listening on port 3000");
});
