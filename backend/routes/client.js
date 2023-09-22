const express = require("express");
const router = express.Router();
const client = require("../db/schema/clientSchema");

router.post('/clientRegister',(req,res)=>{
    let name = req.body.name;
    let email = req.body.email;
    let password = req.body.password;
    let phonenumber = req.body.phonenumber;
    let aadhaar = req.body.aadhaar;
    let city = req.body.city;
    let pincode = parseInt(req.body.pincode);
    let state = req.body.state;

    const user = client.create({
        Name:name,
        Email:email,
        Password:password,
        PhoneNumber:phonenumber,
        Aadhaar:aadhaar,
        City:city,
        Pincode:pincode,
        State:state
    });

    if(user){
        res.status(200).json({success:true,message:"Client Successfully Created"});
    }
    else{
        res.status(400).json({success:false,message:"No Client Created"});
    }
});

router.post("/clientLogin",async(req,res)=>{
    let email=req.body.email;
    let password=req.body.password;
    let e=await client.findOne({Email:email})
    console.log(e)
    if(e==null){
        res.status(400).json({success:false,message:"email id does not exist"})
    }
    // console.log(e.password)
    else{
        if(e.Password===password){
            res.status(200).json({success:true,message:"logged in"})
        }
        else{
            res.status(200).json({success:false,message:"email or password incorrect"})
        }
    }
})
module.exports = router;