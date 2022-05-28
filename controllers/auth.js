const {matchedData} = require("express-validator")
const {encrypt,compare} = require("../utils/handlePassword") 
const {tokenSing} = require("../utils/handleJwt")
const {handleHttpError} = require("../utils/handleError")
const {userModel} = require("../models")

/**
 * Este controlador registra un usuario
 * @param {*} req 
 * @param {*} res 
 */

const RegisterCtrl = async (req,res) =>{

    try{
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
    }catch(e){
        
        handleHttpError(res,"ERROR EN EL REGISTRO")
    }


}

/**
 * Este controlador es el encargado de loguear una persona
 * @param {*} req 
 * @param {*} res 
 */
const LoginCtrl = async (req,res) =>{
    try{
        req=matchedData(req);
        const user = await userModel.findOne({email:req.email}).select('password name role email');
        if(!user){
            handleHttpError(res,"NO EXISTE USER",404);
        }
        const hashPassword = user.password;
        const check = await compare(req.password,hashPassword);

        if(!check){
            handleHttpError(res,"PASSWORD INVALIDA",401);
        }

        const data={
            token: await tokenSing(user),
            user
        }

        user.set('password',undefined,{strict:false});

        res.send({data});

    }catch(e){
        console.log(e);
        handleHttpError(res,"ERROR EN EL LOGUEO");
    }
    
    

}

module.exports = {RegisterCtrl,LoginCtrl};