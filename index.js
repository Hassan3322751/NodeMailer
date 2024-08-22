import express from "express";
import bodyParser from "body-parser";
import env from 'dotenv';
env.config();
import contact from './Contact.js'

const app = express();

app.use(bodyParser.urlencoded({ extended: false })); 
app.use(bodyParser.json());
app.use(express.json());
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

app.use( contact )

app.listen(process.env.PORT, () => {
    console.log(`server is working on ${process.env.PORT}`);
});