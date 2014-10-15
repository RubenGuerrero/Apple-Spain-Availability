var unirest = require('unirest');
var products = require('./products').products;
var async = require('async');


var headers = {
	/*'Host': 'reserve.cdn-apple.com',
	'Accept': 'application/json',
	'User-Agent': 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/37.0.2062.124 Safari/537.36',
	'Referer': 'https://reserve.cdn-apple.com/ES/es_ES/reserve/iPhone/availability',
	'Cookie': 's_pathLength=ireserve%3D1%2C; s_invisit_n2_es=0; s_vnum_n2_es=0%7C3; s_orientationHeight=785; s_cc=true; s_fid=74EDDF2105CCDC45-122FBC423A057F17; s_ppv=ireserve%2520-%2520availability%2520%2528es%2529; s_orientation=%5B%5BB%5D%5D; s_sq=%5B%5BB%5D%5D'*/
}

var STORES;
var AVAILABILITY;

var getSimpleProductsObject = function(store){

	var simpleProducts = [];
	products.forEach(function(product){

		//console.log(item);

		var productSimple = {
			name: product.name,
			sizes: [],
		};

		product.sizes.forEach(function(size){

			var sizeSimple = {
				size: size.size,
				colors: []
			};

			size.colors.forEach(function(color){
				sizeSimple.colors.push({
					name: color.name,
					available: AVAILABILITY[store][color.partNumber]
				})
			});

			productSimple.sizes.push(sizeSimple);

		});

		simpleProducts.push(productSimple);

	});

	return simpleProducts;

}

var makeCall = function(){
	// Your accountSid and authToken from twilio.com/user/account
	var accountSid = 'ACce88bd4e22e6893b1ba5cb1775929ba6';
	var authToken = "46e9d8ffb364e8a6b1507dbbd44737b3";
	var client = require('twilio')(accountSid, authToken);

	//require the Twilio module and create a REST client 
	var client = require('twilio')(accountSid, authToken); 

	client.calls.create({ 
		to: "+34677176592", 
		from: "+34518880609", 
		url: "http://www.google.es",
		method: "GET",
		fallbackMethod: "GET",
		statusCallbackMethod: "GET",
		record: "false" 
	}, function(err, call) {
		console.log(err);
		console.log(call.sid);
	});
};

var REQ_STORES = ['R435', 'R436', 'R450', 'R397'];
var REQ_MODEL = ['iPhone 6'];
var REQ_SIZE = ['64GB'];
var REQ_COLOR = ['Gris espacial'];

var getFilteredData = function(cb){

	var stores = STORES.stores.filter(function(store){
		return REQ_STORES.indexOf(store.storeNumber) !== -1;
	});

	var data = [];

	var le = stores.length;

	var fakeCB = function(_data){
		data.push(_data);
		if(--le === 0){
			cb(data)
		}
	}

	stores.forEach(function(store){
		var AV = getSimpleProductsObject(store.storeNumber);
		AV.forEach(function(model){
			if(REQ_MODEL.indexOf(model.name) !== -1){

				model.sizes.forEach(function(size){
					if(REQ_SIZE.indexOf(size.size) !== -1){

						size.colors.forEach(function(color){
							if(REQ_COLOR.indexOf(color.name) !== -1){

								fakeCB({
									store: store.storeName,
									size: size.size,
									color: color.name,
									av: color.available
								});

							}

						});
					}

				});
			}

		});
	});
};

var getData = function (cb){

	unirest.get('https://reserve.cdn-apple.com/ES/es_ES/reserve/iPhone/stores.json')
	.headers(headers)
	.end(function (response) {

		STORES = response.body;

		unirest.get('https://reserve.cdn-apple.com/ES/es_ES/reserve/iPhone/availability.json')
		.headers(headers)
		.end(function(response) {

			AVAILABILITY = response.body;
			getFilteredData(function(data){
				cb(data);
			});

		});

	});

}

var express = require('express');
var app = express();

app.get('/', function (req, res) {
	getData(function(data){
		res.end(JSON.stringify(data));
	});
})

var server = app.listen(80, function () {

	var host = server.address().address
	var port = server.address().port

	console.log('Example app listening at http://%s:%s', host, port)

});