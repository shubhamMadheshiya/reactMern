require('dotenv').config()
const { json } = require('express');
const express = require("express");
const user = require("./model/userSchema");
require('./db/conn')


const port = process.env.PORT || 8000;


const app = express();

app.use(express.json())
app.use(require("./router/auth"));


app.get("/" , (req,res)=>{

    res.send("hello from server");
})



app.listen(port,(error)=>{
if(error)console.log(error);
console.log(`listing to port number ${port}`)
})