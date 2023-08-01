const express=require("express");
const bodyParser=require("body-parser");
const nodemailer = require('nodemailer');
require("dotenv").config();
const mailerKey=process.env.NODEJS_MAILER;

const app=express();
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

app.listen(3000,function(){
    console.log("connected");
});
app.get("/",function(req,res){
    res.sendFile(__dirname+"/index.html");
})
app.post('/', (req, res) => {
  const { name, email, message } = req.body;

  // Create a reusable transporter object using SMTP transport
  let transporter = nodemailer.createTransport({
    service: 'Gmail', // You can use any email service that supports SMTP
    auth: {
      user: 'divakarjaiswal777@gmail.com', // Your email account
      pass: mailerKey, // Your email password
    },
  });

  // Set up the email data
  let mailOptions = {
    from: 'divakarjaiswal777@gmail.com', // Sender address
    to: 'divakarjaiswal7777@gmail.com', // Recipient address
    subject: 'New contact form submission', // Subject line
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`, // Email body
  };

  // Send the email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log('Error sending email:', error);
      res.status(500).send('Something went wrong.');
    } else {
      console.log('Email sent:', info.response);
      res.status(200).send('Message sent successfully.');
    }
  });
});
