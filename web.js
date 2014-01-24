var express = require('express')
var app = module.exports = express.createServer();

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
    	to: "emorris@castlerockresearch.com", // list of receivers
		//railsbangalore@crri.co.in
    	subject: "Solaro Brochure Error Page Accessed", // Subject line
    	text: "Solaro Brochure Error Page Accessed text", // plaintext body
    	html: "<b>Solaro Brochure Error Page Accessed. Something has caused Solaro to redirect to Heroku Error Page</b>" // html body
	}

	;console.log("Request received and about to mail.");
	
	smtpTransport.sendMail(mailOptions, function(error, res){
    	if(error){
        	console.log(error);
    	}else{
        	console.log("Message sent: " + res.message);
   			}
    	smtpTransport.close();
	});
		
	res.writeHead(200, {"Content-Type": "text/plain"});
	res.write("Solaro application error has occurred. Please try again in a few moments");
	res.end();
});

app.listen(3000);

