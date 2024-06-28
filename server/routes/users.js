const express = require('express');
const router = express.Router();
const User = require('../models/User.js');
const bcrypt = require('bcryptjs');

//Get all users
router.get('/', async (req,res)=>{
    try {
        const users = await User.find();
        res.status(200).send(users);
    } catch (error) {
        console.log(error);
        res.status(500).send({error:'Internal Server Error!'});
    }
})

//Delete user by
router.delete('/:id',async (req,res) => {
    try {
        const {id} = req.params
        const deletedUser = await User.findByIdAndDelete(id);
        if(!deletedUser){
            return res.status(404).send({error:'User Not Found!'});
        }
        return res.status(200).send(deletedUser);
    } catch (error) {
        console.log(error);
        res.status(500).send({error: 'Internal Server Error!'});
    }
})

//Get user by id
router.get("/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const user = await User.findById(id);
  
      if (!user) {
        return res.status(404).json({ error: "User not found!" });
      }
  
      res.status(200).send(user);
    } catch (error) {
      console.error(error);
      res.status(500).send({ error: "Internal Server Error!" });
    }
  });

  router.put("/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const updates = req.body;

        // Şifreyi hashle
        if (updates.password) {
            const hashedPassword = await bcrypt.hash(updates.password, 10);
            updates.password = hashedPassword;
        }

        const updatedUser = await User.findByIdAndUpdate(id, updates, {
            new: true,
        });

        res.status(200).send(updatedUser);
    } catch (error) {
        console.log(error);
        res.status(500).send({ error: "Internal Server Error!" });
    }
});

  

module.exports = router;
