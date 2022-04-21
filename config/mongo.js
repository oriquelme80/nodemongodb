const mongoose=require("mongoose");

const dbConnect = () => {

        const DB_URI=process.env.DB_URI;
        mongoose.connect(DB_URI,{
            useNewURLParser:true,
            useUnifiedTopology:true,
        },(err,res)=>{
            if(!err)
            {
                console.log("bien")
            }else{
                console.log("mal")
                }
            }
        

        )
}

module.exports = dbConnect