var products	= require('./products');
var call		= require('./call');

var REQ_STORES = ['R435', 'R436', 'R450', 'R397'];
var REQ_MODEL = ['iPhone 6', 'iPhone 6 Plus'];
var REQ_SIZE = ['64GB'];
var REQ_COLOR = ['Gris espacial'];

var express = require('express');
var app = express();

app.get('/', function (req, res) {
	products.getData(function(data){
		res.json(data);
	}, REQ_STORES, REQ_MODEL, REQ_SIZE, REQ_COLOR);
})

app.set('port', (process.env.PORT || 5000))

var server = app.listen(app.get('port'), function () {

	var host = server.address().address
	var port = server.address().port

	console.log('Example app listening at http://%s:%s', host, port)

});