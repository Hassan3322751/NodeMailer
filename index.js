import express from "express";
import bodyParser from "body-parser";
import env from 'dotenv';
env.config();
import contact from './Contact.js'

const app = express();

app.use(bodyParser.urlencoded({ extended: false })); 
app.use(bodyParser.json());  //Middleware to parse body data from Frontend
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use( contact )

app.listen(process.env.PORT, () => {
    console.log(`server is working on ${process.env.PORT}`);
});
