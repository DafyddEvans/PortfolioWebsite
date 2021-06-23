const express = require("express");
const bodyParser = require("body-parser");
const nodeMailer = require("nodemailer");


const app = express();

const port = 3000;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html")
})


app.listen(port, () => {
    console.log("Server has started at http://localhost:" + port);
})