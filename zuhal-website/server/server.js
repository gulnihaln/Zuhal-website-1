const express = require("express");
const app = express();
const cors = require("cors");
const nodemailer = require("nodemailer");
require("dotenv").config();
const port = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());

let transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    type: "OAuth2",
    user: process.env.EMAIL,
    pass: process.env.WORD,
    clientId: process.env.OAUTH_CLIENTID,
    clientSecret: process.env.OAUTH_CLIENT_SECRET,
    refreshToken: process.env.OAUTH_REFRESH_TOKEN,
  },
});
transporter.verify((err, success) => {
  err
    ? console.log(err)
    : console.log(`=== Server is ready to take messages: ${success} ===`);
});

app.post("/send", function (req, res) {
  console.log(req.body);
  let mailOptions = {
    from: `${req.body.email}`,
    to: process.env.EMAIL,
    subject: `${req.body.topic}`,
    text: `
    tel :${req.body.contactNum}
    name:${req.body.name}
    message: ${req.body.enquiry}
    from:${req.body.email}`,
  };
  // let mailOptions = req.body;
  transporter.sendMail(mailOptions, function (err, data) {
    if (err) {
      console.log("Error " + err);
    } else {
      console.log("Email sent successfully");
      res.json({
        status: "success",
      });
    }
  });
});

app.listen(port, () => {
  console.log(`server is listening on port ${port}`);
});
