import express from 'express';
import NodeMailer from "nodemailer"
import env from 'dotenv';
env.config();
const router = express.Router();

router.get("/contact", async(req, res) => {
    // const { name, email, website, message } = JSON.parse(req.body);
    const name = "Hassan";
    const message = "message";
    const website = "Chat-Web"; //Your web name

   
       let transport= NodeMailer.createTransport({
           service:"gmail",
           host: 'smtp.gmail.com',
           port: 465,
           secure: true,
            auth:{
                user:process.env.EMAIL,
                pass:process.env.APP_PASS,
            }
        })
        let mailOptions={
            from: 'Your Web',
            to: "example@gmail.com",  //Email whose you want to send mail
            subject:` - Message from ${name} and the website is ${website!=""?website:"no site"} `,
            text:message+"                               sender email="+email
        }
        await transport.sendMail(mailOptions).then(()=>{
        console.log("Email Sent Successfully")
        // return res.status(200).json({message:"Success"})
       }).catch((err)=>{
        console.log('error')
        // return res.status(400).json({message:"Failed",err})
       })
})

export default router
