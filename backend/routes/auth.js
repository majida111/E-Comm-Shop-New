const express = require('express');
const { registerUser,loginUser } = require('../controller/authController');
const router=express.Router();


router.post('/register',async(req,res)=>{
    let model=req.body;
    if(model.name && model.password && model.email){
        await registerUser(model);
        res.send({
            message:"User registered successfully",
        });

    }
    else{
        res.status(400).json({
            error:"Please provide name, password and email",
        })
    }

})


router.post('/login',async(req,res)=>{
    let model=req.body;
    if(model.password && model.email){
        const result= await loginUser(model);
        if(result){
            res.send(result);
        }else{
            res.status(400).json({
                error:"Password or email is incorrect",
            })
        }
     
    }
    else{
        res.status(400).json({
            error:"Please provide password and email",
        })
    }

})


module.exports = router;