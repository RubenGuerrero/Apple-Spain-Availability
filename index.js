var unirest = require('unirest');
var products = require('./products').products;

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


unirest.get('https://reserve.cdn-apple.com/ES/es_ES/reserve/iPhone/stores.json')
.headers(headers)
.end(function (response) {

	STORES = response.body;

	unirest.get('https://reserve.cdn-apple.com/ES/es_ES/reserve/iPhone/availability.json')
	.headers(headers)
	.end(function(response) {

		AVAILABILITY = response.body;

		STORES.stores.forEach(function(store){
			console.log(store.storeName+' ('+store.storeNumber+')--------------------');
			console.log(JSON.stringify(getSimpleProductsObject(store.storeNumber)));
		});

	});

});