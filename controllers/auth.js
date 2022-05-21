const {matchedData} = require("express-validator")
const {encrypt} = require("../utils/handlePassword") 
const {tokenSing} = require("../utils/handleJwt")
const {userModel} = require("../models")


const LoginCtrl = async (req,res) =>{

    
    req=matchedData(req);
    const password = await encrypt(req.password);
    const body = {...req,password};
    const dataUser = await userModel.create(body);
    dataUser.set("password",undefined,{strict: false});

    const data = {
        token: await tokenSing(dataUser),
        user: dataUser
    };


    res.send({data});

}

module.exports = {LoginCtrl};