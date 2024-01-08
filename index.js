const express=require("express");
const bodyParser=require("body-parser");
const nodemailer = require('nodemailer');
require("dotenv").config();
const mailerKey=process.env.NODEJS_MAILER;

const app=express();
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

app.listen(4000,function(){
    console.log("connected");
});
app.get("/",function(req,res){
    res.sendFile(__dirname+"/index.html");
})
app.post('/', (req, res) => {
  const { name, email, message } = req.body;


  let transporter = nodemailer.createTransport({
    service: 'Gmail', 
    auth: {
      user: 'divakarjaiswal777@gmail.com', 
      pass: mailerKey,
    },
  });

  
  let mailOptions = {
    from: 'divakarjaiswal777@gmail.com', 
    to: 'divakarjaiswal7777@gmail.com', 
    subject: 'New contact form submission', 
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`, 
  };

 
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log('Error sending email:', error);
    } else {
      console.log('Email sent:', info.response);
    }
  });
  
});
