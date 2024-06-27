const express = require("express");
const router = express.Router();

//Diğer route'ları içe aktarıyoruz.
const productRoute = require("./products.js");
const categoriesRoute = require("./categories.js");
const authRoute = require("./auth.js");
const couponRoute = require("./coupons.js");
const userRoute = require('./users.js');
const paymentRoute = require("./payment.js");

//Her route ilgili yol altında kullanıyoruz

router.use("/categories", categoriesRoute);
router.use("/auth", authRoute);
router.use("/products", productRoute);
router.use("/coupons", couponRoute);
router.use('/users', userRoute);
router.use("/payment", paymentRoute);


module.exports = router;
