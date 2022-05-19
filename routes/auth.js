const express = require("express");
const { matchedData } = require("express-validator");
const router = express.Router();
const {validatorLogin,validatorRegister} = require("../validators/auth") 
const {encrypt,compare} = require("../utils/handlePassword")
const {userModel} = require("../models");

/*login*/ 
router.post("/register",validatorRegister,async (req,res)=>{
    req=matchedData(req);
    const password = await encrypt(req.password)
    const body = {...req,password}
    const data = await userModel.create(body)
    data.set("password",undefined,{strict: false})
    res.send({data});
});

/*register*/
router.post("/auth");

module.exports = router;
