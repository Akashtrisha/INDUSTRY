const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");

const app = express();
const PORT = 3001;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname));


  

app.listen(3001, () => {
  console.log(`Server running on http://localhost:${3001}`);
});