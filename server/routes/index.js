const express = require('express');
const router = express.Router();

//Diğer route'ları içer aktarıyoruz.
const productRoute=require('./products.js');
const categoriesRoute=require('./categories.js');