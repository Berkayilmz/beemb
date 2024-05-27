const express = require('express');
const router = express.Router();

// Get all categories

router.get('/', async (req,res)=>{
    res.send('Get all categories');
})

module.exports=router;