const express = require("express");
const { matchedData } = require("express-validator");
const router = express.Router();
const {validatorLogin,validatorRegister} = require("../validators/auth") 
const {encrypt,compare} = require("../utils/handlePassword")
const {userModel} = require("../models");

const {tokenSing} =require("../utils/handleJwt")

const {RegisterCtrl,LoginCtrl} =require("../controllers/auth")

/*register*/ 
router.post("/register",validatorRegister,RegisterCtrl);

/*login*/
router.post("/login",validatorLogin,LoginCtrl);

module.exports = router;
