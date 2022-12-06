require('dotenv').config();
const mongoose = require("mongoose");



const db ="mongodb+srv://Shubham:Shubham123456789@cluster0.jd84naf.mongodb.net/?retryWrites=true&w=majority"
mongoose.connect(db).then(()=>{
    console.log("connection through db sucessful")
}).catch((e)=>{
    console.log(`error in db connection`);
});
