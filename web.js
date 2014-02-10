var express = require("express");
var app = express();


app.get('/', function(req, res){
  var nodemailer = require("nodemailer");

	// create reusable transport method (opens pool of SMTP connections)
	var smtpTransport = nodemailer.createTransport("SMTP",{
    	service: "Gmail",
    	auth: {
        	user: "solaroerror@crri.co.in",
        	pass: "3xt3rm1n80r"
    	}
	});

	var mailOptions = {
    	from: "Solaro Error<solaroerror@castlerockresearch.com>", // sender address
    	to: "railsbangalore@crri.co.in,it-team@castlerockresearch.com", // list of receivers
    	subject: "Solaro Error Page Hit", // Subject line
    	text: "Solaro Error Page Hit", // plaintext body
    	html: "<b>Solaro error page has been hit.</b>" // html body
	}
	
	smtpTransport.sendMail(mailOptions, function(error, res){
    	if(error){
        	console.log(error);
    	}else{
        	console.log("Message sent: " + res.message);
   			}
    	smtpTransport.close();
	});
		
	res.writeHead(200, {"Content-Type": "text/plain"});
	res.write(" A Solaro application error has occurred while processing your request.\n Please press the back button and try again. \n\n We have been notified and are working on a solution to this error. \n\n Thank you.");
	res.end();
});

//SECURO ERROR
app.get('/securo', function(req, res){
  var nodemailer = require("nodemailer");

	// create reusable transport method (opens pool of SMTP connections)
	var smtpTransport = nodemailer.createTransport("SMTP",{
    	service: "Gmail",
    	auth: {
        	user: "solaroerror@crri.co.in",
        	pass: "3xt3rm1n80r"
    	}
	});

	var mailOptions = {
    	from: "Solaro Error<solaroerror@castlerockresearch.com>", // sender address
    	to: "emorris@castlerockresearch.com",
		//to: "railsbangalore@crri.co.in,it-team@castlerockresearch.com", // list of receivers
    	subject: "Securo Error Page Hit", // Subject line
    	text: "Securo Error Page Hit", // plaintext body
    	html: "<b>Securo error page has been hit.</b>" // html body
	}
	
	smtpTransport.sendMail(mailOptions, function(error, res){
    	if(error){
        	console.log(error);
    	}else{
        	console.log("Message sent: " + res.message);
   			}
    	smtpTransport.close();
	});
		
	res.writeHead(200, {"Content-Type": "text/plain"});
	res.write(" An application error has occurred while processing your request.\n Please press the back button and try again. \n\n We have been notified and are working on a solution to this error. \n\n Thank you.");
	res.end();
});

var port = Number(process.env.PORT || 5000);
app.listen(port, function() {
  console.log("Listening on " + port);
});
