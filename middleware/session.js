const { userModel } = require("../models");
const {handleHttpError}=require("../utils/handleError");
const { verifyToken } = require("../utils/handleJwt");

const authMiddleware = async (req,res,next) => {

    try{
        if(!req.headers.authorization){
            handleHttpError(res,"NEED SESSION TOKEN",401);
            return
        }

        const token = req.headers.authorization.split(' ').pop();
        const dataToken = await verifyToken(token);

        if(!dataToken._id){
            handleHttpError(res,"ERROR ID TOKEN",401);
        }

        next()

        const user = userModel.findById(dataToken._id);
        req.user= user;

    }catch(e){
        handleHttpError(res,"ERROR_DE_SESSION",401);
    }
}

module.exports = {authMiddleware};