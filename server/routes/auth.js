const express = require('express');
const router = express.Router();
const User = require('../models/User.js');
const bcrypt = require('bcryptjs');

//Create user
router.post('/register', async (req, res) => {
    try {
        const { username, email, password } = req.body;

        const hashedPassword = await bcrypt.hash(password,10);

        const newUser = await new User({ username, email, password:hashedPassword });
        await newUser.save();

        res.status(201).send(newUser)
    } catch (error) {
        console.error();
        res.status(500).send({ error: 'Internal Server Error' });
    }
})

//Get all users
router.get('/', async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).send(users);
    } catch (error) {
        console.error(error);
        res.status(404).send({error: 'Users not found!'});
    }
})

//Get user by id
router.get('/:id', async (req, res)=>{
    try {
        const {id} = req.params;
        const user = await User.findById(id);
        res.status(200).send(user);
    } catch (error) {
        console.error(error);
        res.status(404).send({error:'User not found!'});
    }
})

module.exports = router;