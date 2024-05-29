const express = require('express');
const router = express.Router();

//Diğer route'ları içe aktarıyoruz.
const productRoute=require('./products.js');
const categoriesRoute=require('./categories.js');
const authRoute=require('./auth.js')

//Her route ilgili yol altında kullanıyoruz

router.use('/categories',categoriesRoute);
router.use('/auth',authRoute);
router.use('/products',productRoute);

module.exports = router;