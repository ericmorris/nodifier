var express = require("express");
var app = express();

//datestamp
/*
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
*/

//1.SOLARO
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
    	subject: "Solaro Error Page Accessed", // Subject line
    	text: "Solaro Error Page Accessed", // plaintext body
    	//html: "<b>Solaro app error page accessed on "+getDateTime()+" UTC/GMT.</b>" // html body
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
		
	//res.writeHead(200, {"Content-Type": "text/plain"});
	//res.write(" An application error has occurred while processing your request.\n Please press the back button and try again. \n\n We have been notified and are working on a solution to this error. \n\n Thank you.");
	//res.end();
	
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
    	subject: "Securo Error Page Accessed", // Subject line
    	text: "Securo Error Page Accessed", // plaintext body
    	//html: "<b>Securo app error page accessed on "+getDateTime()+" UTC/GMT.</b>" // html body
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
		
	res.writeHead(200, {"Content-Type": "text/plain"});
	res.write(" An application error has occurred while processing your request.\n Please press the back button and try again. \n\n We have been notified and are working on a solution to this error. \n\n Thank you.");
	res.end();
	
	
	/*res.writeHead(200, {'Content-Type': 'text/html'});
	res.write('<!doctype html>\n<html lang="en">\n' +
	'<head>\n<meta charset="utf-8">\n<title>Request Timed Out</title>\n' +
	'<style type="text/css">* {font-family:arial, sans-serif;}</style>\n' +
	'</head>\n<body>\n<h1><center>Your Request has Timed Out</center></h1>\n' +
	'<div id="content"><p><center>An error has occurred</p><ul><li>Our administrators have been notified, and are<br> working hard to enhance your Solaro experience.<br><br>Thanks for your patience.</center></li></ul></div>' +
	'\n</body>\n</html>');

	res.end();
	*/
});

//3.SOLARO-IN-BROCHURE ERROR
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
    	subject: "Solaro-in-brochure Error Page Accessed", // Subject line
    	text: "Solaro-in-brochure Error Page Accessed", // plaintext body
    	//html: "<b>Solaro-in-brochure app error page accessed on "+getDateTime()+" UTC/GMT.</b>" // html body
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
		
	res.writeHead(200, {"Content-Type": "text/plain"});
	res.write(" An application error has occurred while processing your request.\n Please press the back button and try again. \n\n We have been notified and are working on a solution to this error. \n\n Thank you.");
	res.end();
	
	/*
	res.writeHead(200, {'Content-Type': 'text/html'});
	res.write('<!doctype html>\n<html lang="en">\n' +
	'<head>\n<meta charset="utf-8">\n<title>Request Timed Out</title>\n' +
	'<style type="text/css">* {font-family:arial, sans-serif;}</style>\n' +
	'</head>\n<body>\n<h1><center>Your Request has Timed Out</center></h1>\n' +
	'<div id="content"><p><center>A Solaro error has occurred</p><ul><li>Our administrators have been notified, and are<br> working hard to enhance your Solaro experience.<br><br>Thanks for your patience.</center></li></ul></div>' +
	'\n</body>\n</html>');

	res.end();
	*/
});

//4.SOLARO MAINTENANCE
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
    	subject: "Solaro Maintenance Page Accessed", // Subject line
    	text: "Solaro Maintenance Page Accessed", // plaintext body
    	//html: "<b>Solaro Maintenance maintenance page accessed on "+getDateTime()+" UTC/GMT.</b>" // html body
		html: "<b>Solaro app maintenance page accessed</b>" // html body
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
	
	/*
	res.writeHead(200, {'Content-Type': 'text/html'});
	res.write('<!doctype html>\n<html lang="en">\n' +
	'<head>\n<meta charset="utf-8">\n<title>Request Timed Out</title>\n' +
	'<style type="text/css">* {font-family:arial, sans-serif;}</style>\n' +
	'</head>\n<body>\n<h1><center>Your Request has Timed Out</center></h1>\n' +
	'<div id="content"><p><center>We Are Currently Updating Solaro</p><ul><li>We are updating Solaro<br> in order to enhance your Solaro experience.<br><br>Please try back in a minute.</center></li></ul></div>' +
	'\n</body>\n</html>');

	res.end();
	*/
});

//5.SECURO MAINTENANCE
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
    	subject: "Securo Maintenance Page Accessed", // Subject line
    	text: "Securo Maintenance Page Accessed", // plaintext body
    	//html: "<b>Securo Maintenance page accessed on "+getDateTime()+" UTC/GMT.</b>" // html body
		html: "<b>Securo app maintenance page accessed</b>" // html body

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
	
	/*
	res.writeHead(200, {'Content-Type': 'text/html'});
	res.write('<!doctype html>\n<html lang="en">\n' +
	'<head>\n<meta charset="utf-8">\n<title>Request Timed Out</title>\n' +
	'<style type="text/css">* {font-family:arial, sans-serif;}</style>\n' +
	'</head>\n<body>\n<h1><center>Your Request has Timed Out</center></h1>\n' +
	'<div id="content"><p><center>We Are Currently Updating</p><ul><li>We are updating<br> in order to enhance your Solaro experience.<br><br>Please try back in a minute.</center></li></ul></div>' +
	'\n</body>\n</html>');

	res.end();
	*/
});
});

var port = Number(process.env.PORT || 5000);
app.listen(port, function() {
  console.log("Listening on " + port);
});
