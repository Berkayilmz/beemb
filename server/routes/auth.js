const express = require('express');
const router = express.Router();
const User = require('../models/User.js');
const bcrypt = require('bcryptjs');

//Create user (Register)
router.post('/register', async (req, res) => {
    try {
        const { username, email, password } = req.body;

        const existingUser = await User.findOne({ email });

        if (existingUser) {
            res.status(400).send({ error: 'Email already registered!' });
        } else {
            const hashedPassword = await bcrypt.hash(password, 10);

            const newUser = await new User({
                username,
                email,
                password: hashedPassword
            });
            await newUser.save();
        }

        res.status(201).send(newUser)
    } catch (error) {
        console.error();
        res.status(500).send({ error: 'Internal Server Error' });
    }
})

//Login
router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ email });

        if (!user) {
            return res.status(401).send({ error: 'Invalid email or password!' });
        }

        const isPasswordValid = await bcrypt.compare(password,user.password);

        if(!isPasswordValid){
            return res.status(401).send({error: 'Invalid email or password!'})
        }

        res.status(200).send({
            id: user._id,
            email: user.email,
            username: user.username,
            role: user.role
        });
    } catch (error) {
        console.error(error);
        res.status(500).send({ error: 'Internal Server Error' });
    }
})

module.exports = router;