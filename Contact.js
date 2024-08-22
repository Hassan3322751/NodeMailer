import express from 'express';
import NodeMailer from "nodemailer"
import env from 'dotenv';
env.config();
const router = express.Router();

router.get("/contact", async(req, res) => {
    // const { name, email, website, message } = JSON.parse(req.body);
    const name = "Hassan";
    const email = "hassanraza155156@gmail.com";
    const message = "message";
    const website = "sumizan";

   
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
            from: 'Sumizan',
            to:"mianhassan155156@gmail.com",
            subject:`SUMIZAN - Message from ${name} and the website is ${website!=""?website:"no site"} `,
            text:message+"                               sender email="+email
        }
        await transport.sendMail(mailOptions).then(()=>{
        console.log("yes worked")
        // return res.status(200).json({message:"Success"})
       }).catch((err)=>{
        console.log('error')
        // return res.status(400).json({message:"Failed",err})
       })
})

export default router