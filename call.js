module.exports = {
	makeCall: function(){
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
	}
};