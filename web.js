var express = require("express");
var app = express();

function getDateTime() {
    var date = new Date();

    var hour = date.getHours();
    hour = (hour < 10 ? "0" : "") + hour;

    var min  = date.getMinutes();
    min = (min < 10 ? "0" : "") + min;

    var sec  = date.getSeconds();
    sec = (sec < 10 ? "0" : "") + sec;

    var year = date.getFullYear();

    var month = date.getMonth() + 1;
    month = (month < 10 ? "0" : "") + month;

    var day  = date.getDate();
    day = (day < 10 ? "0" : "") + day;

    return year + ":" + month + ":" + day + " at " + hour + ":" + min + ":" + sec;
}
//SOLARO
app.get('/solaro', function(req, res){
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
		to: "error_notification@crri.co.in",
    	//to: "railsbangalore@crri.co.in,it-team@castlerockresearch.com", // list of receivers
    	subject: "Testing - Solaro Error Page has been accessed", // Subject line
    	text: "Solaro Error Page has been accessed", // plaintext body
    	html: "<b>Solaro app error page accessed at "+getDateTime()+" MST.</b>" // html body
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
		to: "error_notification@crri.co.in",
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

//SOLARO-IN-BROCHURE ERROR
app.get('/solaro-in-brochure', function(req, res){
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
		to: "error_notification@crri.co.in",
		//to: "railsbangalore@crri.co.in,it-team@castlerockresearch.com", // list of receivers
    	subject: "Solaro-in-brochure Error Page has been accessed", // Subject line
    	text: "Solaro-in-brochure Error Page has been accessed", // plaintext body
    	html: "<b>Solaro-in-brochure error page has been accessed.</b>" // html body
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

//SOLARO MAINTENANCE
app.get('/maintenance_solaro', function(req, res){
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
		to: "error_notification@crri.co.in",
		//to: "railsbangalore@crri.co.in,it-team@castlerockresearch.com", // list of receivers
    	subject: "Solaro Maintenance Page has been accessed", // Subject line
    	text: "Solaro Maintenance Page has been accessed", // plaintext body
    	html: "<b>Solaro Maintenance page has been hit.</b>" // html body
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

//SECURO MAINTENANCE
app.get('/maintenance_securo', function(req, res){
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
		to: "error_notification@crri.co.in",
		//to: "railsbangalore@crri.co.in,it-team@castlerockresearch.com", // list of receivers
    	subject: "Securo Maintenance Page has been accessed", // Subject line
    	text: "Securo Maintenance Page has been accessed", // plaintext body
    	html: "<b>Securo Maintenance page has been accessed.</b>" // html body
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
