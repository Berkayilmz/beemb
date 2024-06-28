const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const logger = require('morgan');

const app = express();
const mainRoute = require('./routes/index.js');
const PORT = 3000;
const cors = require('cors');

dotenv.config();

const MongoDBConnect = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('Connected to MongoDB!');
    } catch (error) {
        console.error(error);
    }
}

//middlewares 
app.use(logger('dev'));
app.use(express.json());
app.use(cors({
    origin: 'http://localhost:5173', 
    methods: ['GET', 'POST', 'DELETE', 'PUT'], 
    credentials: true 
  }));
  

app.use('/api', mainRoute);

app.get('/', (req, res) => {
    res.send('API is running');
});


app.listen(PORT, () => {
    MongoDBConnect();
    console.log(`PORT ${PORT} listening!`);
})