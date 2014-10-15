var nodemailer = require('nodemailer');

// create reusable transporter object using SMTP transport
var nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport();


module.exports = {
	makeMail: function(data){

		var html = '';
		data.forEach(function(store){
			html += '<p>'+store.store+': '+store.av+'</p>';
		})

		transporter.sendMail({
		    from: 'ruben.guerrero.sanchez@gmail.com', // sender address
		    to: 'yo@rubenguerrero.com', // list of receivers
		    subject: 'iPhone Disponible', // Subject line
		    text: html, // plaintext body
		    html: html // html body
		});

	}
}