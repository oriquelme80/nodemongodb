require("dotenv").config()
const jwt = require("jsonwebtoken")
const JWT_SECRET = process.env.JWT_SECRET

const tokenSing = (user) =>
{
    const sing = jwt.sign(
        {
            _id:user._id,
            role: user.role
        },
        JWT_SECRET,
        {
            expiresIn:"2h"
        }
    );
    return sing 

}

const verifyToken = (tokenJwt) =>
{
    try{
        return jwt.verify(tokenJwt,JWT_SECRET)

    }catch(e){
        return null
    }
}

module.exports = {tokenSing,verifyToken}