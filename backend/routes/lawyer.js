const express = require("express");
const router = express.Router();
const lawyer = require("../db/schema/lawyerSchema");

router.post('/lawyerRegister',async(req,res)=>{  

    const lawyerUser = await lawyer.create({
        Name:req.body.name,
        Email:req.body.email,
        Password:req.body.password,
        AibeNumber:req.body.aibenumber,
        Expertise:req.body.clickedOptions,
        City:req.body.city,
        Description:req.body.description
    });

    console.log(lawyerUser);

    if(lawyerUser){
        res.status(200).json({success:true,message:"Lawyer Successfully Created"});
    }
    else{
        res.status(400).json({success:false,message:"No Lawyer Created"});
    }
});
router.post("/lawyerLogin",async(req,res)=>{
    let email=req.body.email;
    let password=req.body.password;
    let e=await lawyer.findOne({Email:email})
    if(e==null){
        res.status(200).json({success:false,message:"email id does not exist"})
    }
    else{
        if(e.Password==password){
            res.status(200).json({success:true,message:"logged in"})
        }
        else{
            res.status(200).json({success:false,message:"email or password incorrect"})
        }
    }
})
router.post("/requestClient",async(req,res)=>{
    let email=req.body.lawyer_email;
    let client_email=req.body.client_email;
    let message=req.body.message;
    let obj={client_id:client_email,message:message}
    let x=await lawyer.findOneAndUpdate({Email:email},{$push:{requestedId:obj}})
    if(x){
        res.status(200).json({success:true,message:"your request is sent"})
    }
    else{
        res.status(200).json({success:false,message:"some error occured"})

    } 
})
module.exports = router;