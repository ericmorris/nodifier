var express = require("express");
var app = express();
//var counter = 0;
var solarocounter = 0;
var securocounter = 0;
var brochurecounter = 0;
var solmaintcounter = 0;
var secmaintcounter = 0;

var lastSolFail = new Date();
var lastSecFail = new Date();
var lastBroFail = new Date();
var lastSolMFail = new Date();
var lastSecMFail = new Date();


var nodemailer = require("nodemailer");
  
// Twilio Credentials 
var accountSid = 'ACa3486b647db1bf511656cfc16db1f031'; 
var authToken = 'fa0a2c223311565043dfe761f840e005'; 
//require the Twilio module and create a REST client 
var client = require('twilio')(accountSid, authToken);   
  // create reusable transport method (opens pool of SMTP connections)
  var smtpTransport = nodemailer.createTransport("SMTP",{
    	service: "Gmail",
    	auth: {
        	user: "solaroerror@crri.co.in",
        	pass: "3xt3rm1n80r"
    	}
	});
	


//1.SOLARO
app.get('/solaro', function(req, res){

	var mailOptions = {
    	from: "Solaro Error<solaroerror@castlerockresearch.com>", // sender address
		to: "error_notification@crri.co.in",
		//to: "emorris@castlerockresearch.com",
    	subject: "Solaro Error Page Accessed", // Subject line
    	text: "Solaro Error Page Accessed", // plaintext body
		html: "<b>Solaro app error page accessed</b>" // html body
	}
	
	smtpTransport.sendMail(mailOptions, function(error, res){
    	if(error){
        	console.log(error);
    	}else{
        	console.log("Message sent: " + res.message);
   			}
    	smtpTransport.close();
	});
	
	function resetSolaroCount() {
	solarocounter = 0;
	}
	
	var thisSolFail = new Date();
	
	//If 10 minutes have passed since last failure, reset the counter to 0. Emergency over.
	if((thisSolFail.getTime() - lastSolFail.getTime()) > 600000){
		resetSolaroCount();
		lastSolFail.setTime(thisSolFail.getTime());

	//else increment the counter, and update the time of last failure.
	}else{
		solarocounter++
		lastSolFail.setTime(thisSolFail.getTime());
		
		//Send out sms at counts 5 and 10
		if(solarocounter == 5) {
//Send SMS To Eric: Failure X 5
			client.messages.create({ 
				to: "7809994413",
				from: "+15874104849", 
				body: "Solaro Error Count: 5",   
			}, function(err, message) { 
			console.log("SMS 5x: "+message.sid); 
			});
			
			//Send SMS To Deborah: Failure X 5
			client.messages.create({ 
				to: "7802897695", 
				from: "+15874104849", 
				body: "Solaro Error Count: 5",   
			}, function(err, message) { 
			console.log("SMS 5x: "+message.sid); 
			});
		}
		if(solarocounter == 10){
			//Send SMS To Eric: Failure X 10
			client.messages.create({ 
				to: "7809994413", 
				from: "+15874104849", 
				body: "Solaro Error Count: 10",   
			}, function(err, message) { 
			console.log("SMS 10x: "+message.sid); 
			});
			
			//Send SMS To Deborah: Failure X 10
			client.messages.create({ 
				to: "7802897695", 
				from: "+15874104849", 
				body: "Solaro Error Count: 10",   
			}, function(err, message) { 
			console.log("SMS 10x: "+message.sid); 
			});
		}	
		console.log("Solaro Error Count: "+solarocounter);
	}

	res.writeHead(200, {'Content-Type': 'text/html'});
	res.write('<!doctype html>\n<html lang="en">\n' +
	'<head>\n<meta charset="utf-8">\n<title>Request Timed Out</title>\n' +
	'<style type="text/css">* {font-family:arial, sans-serif;}</style>\n' +
	'</head>\n<body>\n<h1><center>Your Request has Timed Out</center></h1>\n' +
	'<div id="content"><p><center>A Solaro error has occurred</p><ul><li>Our administrators have been notified, and are<br> working hard to enhance your Solaro experience.<br><br>Thanks for your patience.</center></li></ul></div>' +
	'\n</body>\n</html>');
	res.end();
});


//2.SECURO ERROR
app.get('/securo', function(req, res){

	var mailOptions = {
    	from: "Solaro Error<solaroerror@castlerockresearch.com>", // sender address
		to: "error_notification@crri.co.in",
    	subject: "Securo Error Page Accessed", // Subject line
    	text: "Securo Error Page Accessed", // plaintext body
		html: "<b>Securo app error page accessed</b>" // html body
	}
	
	smtpTransport.sendMail(mailOptions, function(error, res){
    	if(error){
        	console.log(error);
    	}else{
        	console.log("Message sent: " + res.message);
   			}
    	smtpTransport.close();
	});
	
	function resetSecuroCount() {
	securocounter = 0;
	}	
		
	var thisSecFail = new Date();
	
	//If 10 minutes have passed since last failure, reset the counter to 0. Emergency over.
	if((thisSecFail.getTime() - lastSecFail.getTime()) > 600000){
		resetSecuroCount();
		lastSecFail.setTime(thisSecFail.getTime());
	}else{
		securocounter++
		lastSecFail.setTime(thisSecFail.getTime());
		
		//Send out sms at counts 5 and 10
		if(securocounter == 5) {
			console.log("Send SMS 1");
			}
		if(securocounter == 10){
			console.log("SEND SMS 2 - reset dyno");
		}	
		console.log("Securo Error Count: "+securocounter);
	}

	res.writeHead(200, {'Content-Type': 'text/html'});
	res.write('<!doctype html>\n<html lang="en">\n' +
	'<head>\n<meta charset="utf-8">\n<title>Request Timed Out</title>\n' +
	'<style type="text/css">* {font-family:arial, sans-serif;}</style>\n' +
	'</head>\n<body>\n<h1><center>Your Request has Timed Out</center></h1>\n' +
	'<div id="content"><p><center>A Securo error has occurred</p><ul><li>Our administrators have been notified, and are<br> working hard to enhance your Solaro experience.<br><br>Thanks for your patience.</center></li></ul></div>' +
	'\n</body>\n</html>');
	res.end();
	
});

//3.SOLARO-IN-BROCHURE ERROR
app.get('/solaro-in-brochure', function(req, res){

	var mailOptions = {
    	from: "Solaro Error<solaroerror@castlerockresearch.com>", // sender address
		to: "error_notification@crri.co.in",
    	subject: "Solaro-in-brochure Error Page Accessed", // Subject line
    	text: "Solaro-in-brochure Error Page Accessed", // plaintext body
		html: "<b>Solaro-in-brochure app error page accessed</b>" // html body
	}
	
	smtpTransport.sendMail(mailOptions, function(error, res){
    	if(error){
        	console.log(error);
    	}else{
        	console.log("Message sent: " + res.message);
   			}
    	smtpTransport.close();
	});

	function resetBrochureCount() {
	brochurecounter = 0;
	}		
	var thisBroFail = new Date();
	
	//If 10 minutes have passed since last failure, reset the counter to 0. Emergency over.
	if((thisBroFail.getTime() - lastBroFail.getTime()) > 600000){
		resetBrochureCount();
		lastBroFail.setTime(thisBroFail.getTime());
	}else{
		brochurecounter++
		lastBroFail.setTime(thisBroFail.getTime());
		
		//Send out sms at counts 5 and 10
		if(brochurecounter == 5) {
			console.log("Send SMS 1");
			}
		if(brochurecounter == 10){
			console.log("SEND SMS 2 - reset dyno");
		}	
		console.log("Solaro Brochure Error Count: "+brochurecounter);
	}
	
	res.writeHead(200, {'Content-Type': 'text/html'});
	res.write('<!doctype html>\n<html lang="en">\n' +
	'<head>\n<meta charset="utf-8">\n<title>Request Timed Out</title>\n' +
	'<style type="text/css">* {font-family:arial, sans-serif;}</style>\n' +
	'</head>\n<body>\n<h1><center>Your Request has Timed Out</center></h1>\n' +
	'<div id="content"><p><center>A Solaro brochure error has occurred</p><ul><li>Our administrators have been notified, and are<br> working hard to enhance your Solaro experience.<br><br>Thanks for your patience.</center></li></ul></div>' +
	'\n</body>\n</html>');
	res.end();
});

//4.SOLARO MAINTENANCE
app.get('/maintenance_solaro', function(req, res){

	var mailOptions = {
    	from: "Solaro Error<solaroerror@castlerockresearch.com>", // sender address
		to: "error_notification@crri.co.in",
    	subject: "Solaro Maintenance Error Page Accessed", // Subject line
    	text: "Solaro Maintenance Page Accessed", // plaintext body
		html: "<b>Solaro Maintenance Page Accessed</b>" // html body
	}
	
	smtpTransport.sendMail(mailOptions, function(error, res){
    	if(error){
        	console.log(error);
    	}else{
        	console.log("Message sent: " + res.message);
   			}
    	smtpTransport.close();
	});
	
	function resetSolMaintCount() {
		solmaintcounter = 0;
	}	
	var thisSolMFail = new Date();
	
	
	//If 10 minutes have passed since last failure, reset the counter to 0. Emergency over.
	if((thisSolMFail.getTime() - lastSolMFail.getTime()) > 600000){
		resetSolMaintCount();
		lastSolMFail.setTime(thisSolMFail.getTime());
	}else{
		solmaintcounter++
		lastSolMFail.setTime(thisSolMFail.getTime());
		
		//Send out sms at counts 5 and 10
		if(solmaintcounter == 5) {
			console.log("Send SMS 1");
			}
		if(solmaintcounter == 10){
			console.log("SEND SMS 2 - reset dyno");
		}	
		console.log("Solaro Maintenance Hit Count: "+solmaintcounter);
	}
		
	res.writeHead(200, {'Content-Type': 'text/html'});
	res.write('<!doctype html>\n<html lang="en">\n' +
	'<head>\n<meta charset="utf-8">\n<title>Request Timed Out</title>\n' +
	'<style type="text/css">* {font-family:arial, sans-serif;}</style>\n' +
	'</head>\n<body>\n<h1><center>Your Request has Timed Out</center></h1>\n' +
	'<div id="content"><p><center>Solaro is undergoing maintenance</p><ul><li>Our administrators have been notified, and are<br> working hard to enhance your Solaro experience.<br><br>Thanks for your patience.</center></li></ul></div>' +
	'\n</body>\n</html>');
	res.end();
	
});

//5.SECURO MAINTENANCE
app.get('/maintenance_securo', function(req, res){

	var mailOptions = {
    	from: "Solaro Error<solaroerror@castlerockresearch.com>", // sender address
		to: "error_notification@crri.co.in",
    	subject: "Securo Maintenance Error Page Accessed", // Subject line
    	text: "Securo Maintenance Page Accessed", // plaintext body
		html: "<b>Securo Maintenance Page Accessed</b>" // html body
	}
	
	smtpTransport.sendMail(mailOptions, function(error, res){
    	if(error){
        	console.log(error);
    	}else{
        	console.log("Message sent: " + res.message);
   			}
    	smtpTransport.close();
	});
	
	function resetSecMaintCount() {
		secmaintcounter = 0;
	}
	
	var thisSecMFail = new Date();
	
	//If 10 minutes have passed since last failure, reset the counter to 0. Emergency over.
	if((thisSecMFail.getTime() - lastSecMFail.getTime()) > 600000){
		resetSecMaintCount();
		lastSecMFail.setTime(thisSecMFail.getTime());
	}else{
		secmaintcounter++
		lastSecMFail.setTime(thisSecMFail.getTime());
		
		//Send out sms at counts 5 and 10
		if(secmaintcounter == 5) {
			console.log("Send SMS 1");
			}
		if(secmaintcounter == 10){
			console.log("SEND SMS 2 - reset dyno");
		}	
		console.log("Securo Maintenance Hit Count: "+secmaintcounter);
	}
		
	res.writeHead(200, {'Content-Type': 'text/html'});
	res.write('<!doctype html>\n<html lang="en">\n' +
	'<head>\n<meta charset="utf-8">\n<title>Request Timed Out</title>\n' +
	'<style type="text/css">* {font-family:arial, sans-serif;}</style>\n' +
	'</head>\n<body>\n<h1><center>Your Request has Timed Out</center></h1>\n' +
	'<div id="content"><p><center>Securo is undergoing maintenance</p><ul><li>Our administrators have been notified, and are<br> working hard to enhance your Solaro experience.<br><br>Thanks for your patience.</center></li></ul></div>' +
	'\n</body>\n</html>');
	res.end();
});


var port = Number(process.env.PORT || 5000);
app.listen(port, function() {
console.log("Listening on " + port);
});
