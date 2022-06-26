const sgMail = require("@sendgrid/mail");
require("dotenv").config();

const {NotFound} = require('http-errors');

const { SENDGRID_API_KEY } = process.env;

sgMail.setApiKey(SENDGRID_API_KEY);

const sendEmail = async(data)=> {
    const email = {...data, from: "Kira_Phoenix@bigmir.net"};
    try{
        await sgMail.send(email)
        return true;
    } catch (error){
        throw new NotFound("Not found");
    }
}


// const email = {
//     to: "fifef72042@tagbert.com",
//     from: "Kira_Phoenix@bigmir.net",
//     subject: "Нове замовлення",
//     html: "<p>Отримання нового  замовлення</p>",
//   };
  
//   sgMail
//     .send(email)
//     .then(() => console.log("Email send success"))
//     .catch((error) => console.log(error.message));
  


module.exports = sendEmail;