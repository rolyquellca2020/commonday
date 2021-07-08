const express = require("express")
const app = express()
const path = __dirname('./')

app.listen('8080' , (req , res)=>{
    res.send("el puerto esta correcto")
})