const nodemailer = require('nodemailer');

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "85918ad57d5223",
      pass: "df958b19927e80"
    }
  });


const sendRegistrationEmail = (name, email) => {
    try {
        const message = {
            from: "LearnWithPeter",
            to: email,
            subject: "Welcome to LearnWithPeter",
            html: `<h3>Hello, ${name}</h3> 
            <p>Your registration has been successful, Hope you will enjoy our tutorials journey.</p><br>
            <h5>Thanks and regards</h5>
            <h5>Team LearnWithPeter</h5>`,
        }
        transport.sendMail(message, function(err, info) {
            if (err) {
              console.log(err)
            } else {
              console.log(info);
            }
        });
    } catch (err) {
        console.log(err)
        throw err
    }
    
}

module.exports = { sendRegistrationEmail }