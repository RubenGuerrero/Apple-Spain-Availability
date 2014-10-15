module.exports = {
	makeCall: function(){

		// Your accountSid and authToken from twilio.com/user/account
		var accountSid = process.env.TWILIO_SID;
		var authToken = process.env.TWILIO_TOKEN;
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
	}
};