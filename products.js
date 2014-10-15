var unirest 	= require('unirest');

module.exports = {
	products: [
		{
			"name": "iPhone 6",
			"localizedName": "iPhone 6",
			"sizes": [{
				"size": "128GB",
				"colors": [{
					"colorSwatchUrl": "https://store.storeimages.cdn-apple.com/3800/as-images.apple.com/is/image/A…=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=1410266074023",
					"partNumber": "MG4C2QL/A",
					"name": "Plata",
					"colorSwatchUrl2x": "https://store.storeimages.cdn-apple.com/3800/as-images.apple.com/is/image/A…=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=1410266074023",
					"colorSortOrder": "2100",
					"available": false
				}, {
					"colorSwatchUrl": "https://store.storeimages.cdn-apple.com/3800/as-images.apple.com/is/image/A…=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=1410266073604",
					"partNumber": "MG4A2QL/A",
					"name": "Gris espacial",
					"colorSwatchUrl2x": "https://store.storeimages.cdn-apple.com/3800/as-images.apple.com/is/image/A…=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=1410266073604",
					"colorSortOrder": "2300",
					"available": false
				}, {
					"colorSwatchUrl": "https://store.storeimages.cdn-apple.com/3800/as-images.apple.com/is/image/A…=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=1410266073747",
					"partNumber": "MG4E2QL/A",
					"name": "Oro",
					"colorSwatchUrl2x": "https://store.storeimages.cdn-apple.com/3800/as-images.apple.com/is/image/A…=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=1410266073747",
					"colorSortOrder": "2200",
					"available": false
				}]
			}, {
				"size": "64GB",
				"colors": [{
					"colorSwatchUrl": "https://store.storeimages.cdn-apple.com/3800/as-images.apple.com/is/image/A…=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=1410266074023",
					"partNumber": "MG4H2QL/A",
					"name": "Plata",
					"colorSwatchUrl2x": "https://store.storeimages.cdn-apple.com/3800/as-images.apple.com/is/image/A…=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=1410266074023",
					"colorSortOrder": "2100",
					"available": false
				}, {
					"colorSwatchUrl": "https://store.storeimages.cdn-apple.com/3800/as-images.apple.com/is/image/A…=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=1410266073604",
					"partNumber": "MG4F2QL/A",
					"name": "Gris espacial",
					"colorSwatchUrl2x": "https://store.storeimages.cdn-apple.com/3800/as-images.apple.com/is/image/A…=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=1410266073604",
					"colorSortOrder": "2300",
					"available": false
				}, {
					"colorSwatchUrl": "https://store.storeimages.cdn-apple.com/3800/as-images.apple.com/is/image/A…=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=1410266073747",
					"partNumber": "MG4J2QL/A",
					"name": "Oro",
					"colorSwatchUrl2x": "https://store.storeimages.cdn-apple.com/3800/as-images.apple.com/is/image/A…=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=1410266073747",
					"colorSortOrder": "2200",
					"available": false
				}]
			}, {
				"size": "16GB",
				"colors": [{
					"colorSwatchUrl": "https://store.storeimages.cdn-apple.com/3800/as-images.apple.com/is/image/A…=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=1410266074023",
					"partNumber": "MG482QL/A",
					"name": "Plata",
					"colorSwatchUrl2x": "https://store.storeimages.cdn-apple.com/3800/as-images.apple.com/is/image/A…=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=1410266074023",
					"colorSortOrder": "2100",
					"available": false
				}, {
					"colorSwatchUrl": "https://store.storeimages.cdn-apple.com/3800/as-images.apple.com/is/image/A…=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=1410266073604",
					"partNumber": "MG472QL/A",
					"name": "Gris espacial",
					"colorSwatchUrl2x": "https://store.storeimages.cdn-apple.com/3800/as-images.apple.com/is/image/A…=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=1410266073604",
					"colorSortOrder": "2300",
					"available": false
				}, {
					"colorSwatchUrl": "https://store.storeimages.cdn-apple.com/3800/as-images.apple.com/is/image/A…=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=1410266073747",
					"partNumber": "MG492QL/A",
					"name": "Oro",
					"colorSwatchUrl2x": "https://store.storeimages.cdn-apple.com/3800/as-images.apple.com/is/image/A…=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=1410266073747",
					"colorSortOrder": "2200",
					"available": false
				}]
			}]
		},
		{
			"name": "iPhone 6 Plus",
			"localizedName": "iPhone 6 Plus",
			"sizes": [{
				"size": "128GB",
				"colors": [{
					"colorSwatchUrl": "https://store.storeimages.cdn-apple.com/3800/as-images.apple.com/is/image/A…=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=1410266073812",
					"partNumber": "MGAE2QL/A",
					"name": "Plata",
					"colorSwatchUrl2x": "https://store.storeimages.cdn-apple.com/3800/as-images.apple.com/is/image/A…=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=1410266073812",
					"colorSortOrder": "2100",
					"available": false
				}, {
					"colorSwatchUrl": "https://store.storeimages.cdn-apple.com/3800/as-images.apple.com/is/image/A…=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=1410266074082",
					"partNumber": "MGAC2QL/A",
					"name": "Gris espacial",
					"colorSwatchUrl2x": "https://store.storeimages.cdn-apple.com/3800/as-images.apple.com/is/image/A…=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=1410266074082",
					"colorSortOrder": "2300",
					"available": false
				}, {
					"colorSwatchUrl": "https://store.storeimages.cdn-apple.com/3800/as-images.apple.com/is/image/A…=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=1410266073686",
					"partNumber": "MGAF2QL/A",
					"name": "Oro",
					"colorSwatchUrl2x": "https://store.storeimages.cdn-apple.com/3800/as-images.apple.com/is/image/A…=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=1410266073686",
					"colorSortOrder": "2200",
					"available": false
				}]
			}, {
				"size": "64GB",
				"colors": [{
					"colorSwatchUrl": "https://store.storeimages.cdn-apple.com/3800/as-images.apple.com/is/image/A…=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=1410266073812",
					"partNumber": "MGAJ2QL/A",
					"name": "Plata",
					"colorSwatchUrl2x": "https://store.storeimages.cdn-apple.com/3800/as-images.apple.com/is/image/A…=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=1410266073812",
					"colorSortOrder": "2100",
					"available": false
				}, {
					"colorSwatchUrl": "https://store.storeimages.cdn-apple.com/3800/as-images.apple.com/is/image/A…=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=1410266074082",
					"partNumber": "MGAH2QL/A",
					"name": "Gris espacial",
					"colorSwatchUrl2x": "https://store.storeimages.cdn-apple.com/3800/as-images.apple.com/is/image/A…=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=1410266074082",
					"colorSortOrder": "2300",
					"available": false
				}, {
					"colorSwatchUrl": "https://store.storeimages.cdn-apple.com/3800/as-images.apple.com/is/image/A…=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=1410266073686",
					"partNumber": "MGAK2QL/A",
					"name": "Oro",
					"colorSwatchUrl2x": "https://store.storeimages.cdn-apple.com/3800/as-images.apple.com/is/image/A…=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=1410266073686",
					"colorSortOrder": "2200",
					"available": false
				}]
			}, {
				"size": "16GB",
				"colors": [{
					"colorSwatchUrl": "https://store.storeimages.cdn-apple.com/3800/as-images.apple.com/is/image/A…=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=1410266073812",
					"partNumber": "MGA92QL/A",
					"name": "Plata",
					"colorSwatchUrl2x": "https://store.storeimages.cdn-apple.com/3800/as-images.apple.com/is/image/A…=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=1410266073812",
					"colorSortOrder": "2100",
					"available": false
				}, {
					"colorSwatchUrl": "https://store.storeimages.cdn-apple.com/3800/as-images.apple.com/is/image/A…=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=1410266074082",
					"partNumber": "MGA82QL/A",
					"name": "Gris espacial",
					"colorSwatchUrl2x": "https://store.storeimages.cdn-apple.com/3800/as-images.apple.com/is/image/A…=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=1410266074082",
					"colorSortOrder": "2300",
					"available": false
				}, {
					"colorSwatchUrl": "https://store.storeimages.cdn-apple.com/3800/as-images.apple.com/is/image/A…=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=1410266073686",
					"partNumber": "MGAA2QL/A",
					"name": "Oro",
					"colorSwatchUrl2x": "https://store.storeimages.cdn-apple.com/3800/as-images.apple.com/is/image/A…=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=1410266073686",
					"colorSortOrder": "2200",
					"available": false
				}]
			}]
		}
	],
	getProducts: function(store){

		var self = this;

		var simpleProducts = [];
		this.products.forEach(function(product){

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
						available: self.AVAILABILITY[store][color.partNumber]
					})
				});

				productSimple.sizes.push(sizeSimple);

			});

			simpleProducts.push(productSimple);

		});

		return simpleProducts;

	},
	getFilteredData: function(REQ_STORES, REQ_MODEL, REQ_SIZE, REQ_COLOR){

		var self = this;

		var stores = self.STORES.stores.filter(function(store){
			return REQ_STORES.indexOf(store.storeNumber) !== -1;
		});

		var data = [];

		stores.forEach(function(store){
			var AV = self.getProducts(store.storeNumber, self.AVAILABILITY);
			AV.forEach(function(model){
				if(REQ_MODEL.indexOf(model.name) !== -1){

					model.sizes.forEach(function(size){
						if(REQ_SIZE.indexOf(size.size) !== -1){

							size.colors.forEach(function(color){
								if(REQ_COLOR.indexOf(color.name) !== -1){

									data.push({
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

		return data;
	},
	getData: function (callback, REQ_STORES, REQ_MODEL, REQ_SIZE, REQ_COLOR){

		var headers = {
			/*'Host': 'reserve.cdn-apple.com',
			'Accept': 'application/json',
			'User-Agent': 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/37.0.2062.124 Safari/537.36',
			'Referer': 'https://reserve.cdn-apple.com/ES/es_ES/reserve/iPhone/availability',
			'Cookie': 's_pathLength=ireserve%3D1%2C; s_invisit_n2_es=0; s_vnum_n2_es=0%7C3; s_orientationHeight=785; s_cc=true; s_fid=74EDDF2105CCDC45-122FBC423A057F17; s_ppv=ireserve%2520-%2520availability%2520%2528es%2529; s_orientation=%5B%5BB%5D%5D; s_sq=%5B%5BB%5D%5D'*/
		}

		var self = this;

		unirest.get('https://reserve.cdn-apple.com/ES/es_ES/reserve/iPhone/stores.json')
		.headers(headers).end(function (response) {

			self.STORES = response.body;

			unirest.get('https://reserve.cdn-apple.com/ES/es_ES/reserve/iPhone/availability.json')
			.headers(headers).end(function(response) {

				self.AVAILABILITY = response.body;
				callback(self.getFilteredData(REQ_STORES, REQ_MODEL, REQ_SIZE, REQ_COLOR));

			});

		});

	}

}