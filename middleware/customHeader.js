const custonHeader = (req, res, next) => {
    

    try{
        const api_Key=req.headers.api_Key;
        console.log(req.headers.api_Key);
        if(api_Key==="oscar")
        {
            next()
        }else{
            res.status(403)
            res.send({ERROR:"ALGO FALLO EN API KEY"})
        }

    }catch(e){
        res.status(403)
        res.send({ERROR:"ALGO FALLO EN CUSTOM READER"})
    }

}

module.exports = custonHeader