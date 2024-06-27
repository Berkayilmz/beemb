const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const logger = require('morgan');
const cors = require('cors');

const app = express();
const mainRoute = require('./routes/index.js');
const PORT = process.env.PORT || 3000;  // Use environment variable PORT

dotenv.config();

const MongoDBConnect = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log('Connected to MongoDB!');
    } catch (error) {
        console.error(error);
    }
}

// Middlewares 
app.use(logger('dev'));
app.use(express.json());
app.use(cors({
    origin: process.env.FRONTEND_URL,  // Use environment variable for frontend URL
    methods: ['GET', 'POST', 'DELETE', 'PUT'],
    credentials: true
}));

app.use('/api', mainRoute);

app.listen(PORT, () => {
    MongoDBConnect();
    console.log(`Server listening on port ${PORT}`);
});
