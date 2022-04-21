require("dotenv").config()
const express = require ("express")
const cors = require("cors")
const dbConnect=require("./config/mongo")

const app=express()
const port = process.env.PORT || 3000

app.use(cors())

app.use('/api',require("./routes"))

app.listen(port, () => {
    console.log('puerto:+' + port)
})

dbConnect()