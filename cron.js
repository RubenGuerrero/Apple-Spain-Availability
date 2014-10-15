var CronJob = require('cron').CronJob;

var products	= require('./products');
var call		= require('./call');
var mail		= require('./mail');

var REQ_STORES = ['R435', 'R436', 'R450', 'R397'];
var REQ_MODEL = ['iPhone 6'];
var REQ_SIZE = ['64GB'];
var REQ_COLOR = ['Gris espacial'];

var ALERTED = false;


new CronJob('*/1 * * * *', function(){
    
	products.getData(function(data){

		if(data && data.length > 0){
			data.forEach(function(store){
				if(store.av){
					if(!ALERTED){
						call.makeCall();
						mail.makeMail(data);
						ALERTED = true;
					}
				}	
			});
		}
		
	}, REQ_STORES, REQ_MODEL, REQ_SIZE, REQ_COLOR);

}, null, true, "Europe/Madrid");