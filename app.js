require('dotenv').config()
const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");


const app = express();

const port = process.env.PORT || 3000

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.PRO_EMAIL,
      pass: process.env.PRO_PASS
    }
  });
  


app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html")
})

app.post("/", (req, res) => {
    var mailOptions = {
        from: process.env.PRO_EMAIL,
        to: process.env.PER_EMAIL
    };

    mailOptions.subject = "Message from " + req.body.name + " on portfolio site"
    mailOptions.text = "name: " + req.body.name + "\nemail: " + req.body.email + "\nmessage: " + req.body.message

    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
            alert("Message sent")
        }
    });
    res.redirect("/")
})


app.listen(port, () => {
    console.log("Server has started at http://localhost:" + port);
})