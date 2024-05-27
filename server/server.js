const express = require('express');
const mongoose = require('mongoose');
const dotenv=require('dotenv');

const app = express();
const PORT = 3000;

dotenv.config();

const MongoDBConnect = async () =>{
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('Connected to MongoDB!');
    } catch (error) {
        console.error(error);
    }
}

app.get('/', (req, res) => {
    res.send('asqwedas')
})

app.listen(PORT, () => {
    MongoDBConnect();
    console.log(`PORT ${PORT} listening!`);
})