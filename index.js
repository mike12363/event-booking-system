const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
app.use(bodyParser.urlencoded({extended: true}));
const fs = require("fs");
const path = require("path");





app.use(express.static("public"));
app.get("/",function(req,res){
    res.sendFile(__dirname+"/index.html");

});

app.get("/about",function(req,res){
    res.sendFile(__dirname+"/about.html");

});

app.get("/gallery",function(req,res){
    res.sendFile(__dirname+"/gallery.html");

});

app.get("/contact",function(req,res){
    res.sendFile(__dirname+"/contact.html");

});

app.post("/submit", function(req, res){
    let name = req.body.name;
    let email = req.body.email;
    let number = req.body.number;
    fs.appendFile('data.txt', `name: ${name}, email: ${email}, number: ${number}\n`, function(e){
        if(e){
            console.log(e);
        }

        var transporter = nodemailer.createTransport({
            service: 'gmail',
            host: 'smtp.gmail.com',
            port: 3000,
            secure: true,
            auth: {
            user: 'ratedrmusic10@gmail.com',
            pass: 'qwerty@123',
            }
        });

        const sendEmail = (email, token) => {
            const mailOptions = {
             from: 'ratedrmusic10@gmail.com',
             to: req.body.email,
             subject: 'Successfully Tickets Booked',
             text: 'Congratulations, you have successfully booked the tickets for the upcoming event'
           };

           transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
              console.log('Error in sending email  ' + error);
              return true;
            } else {
             console.log('Email sent: ' + info.response);
             return false;
            }
           });
          };
        
          module.exports = sendEmail;

        
    });
});

app.listen(3000,function(){
    console.log("server running on port 3000");c
});