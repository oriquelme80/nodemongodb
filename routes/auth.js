const express = require("express");
const { matchedData } = require("express-validator");
const router = express.Router();
const {validatorLogin,validatorRegister} = require("../validators/auth") 
const {encrypt,compare} = require("../utils/handlePassword")
const {userModel} = require("../models");

const {tokenSing} =require("../utils/handleJwt")

const {LoginCtrl} =require("../controllers/auth")

/*login*/ 
router.post("/register",validatorRegister,LoginCtrl);

/*register*/
router.post("/auth");

module.exports = router;
