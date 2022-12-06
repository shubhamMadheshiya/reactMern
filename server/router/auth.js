const express = require("express");
const user = require("../model/userSchema");
require("../db/conn");

const router = express.Router();

router.get("/",(req,res)=>{

    res.send("hello from router");
});

router.post("/register",async(req,res)=>{

    try {

    
        res.json({message:req.body})
        const {name , email , phone ,password ,cpassword}= req.body;
       
        if(!name || !email || !phone || !password || !cpassword){
            res.json({error:"plzz fill all find"});
        };
        const newUser = new user({name,email,phone,password,cpassword});
        
        const registerUser= await newUser.save();
       

        console.log(name);
        
    } catch (error) {
        console.log(`error in post method ${error}`)
        
    }

   

})

module.exports = router;
