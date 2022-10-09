const express=require('express');
const { body, validationResult } = require('express-validator');
const router=express.Router();
const User=require('../Models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const fetchuser=require('../middleware/fetchuser');

const JWT_SECRET=process.env.JWT_SECRET;



// -----------------------------------------------------------------------------------------------------------------------------
// ROUTE1:Login a user using POST:api/auth/login.No login required.
router.post('/login',[
    body('email','Enter valid email').isEmail(),
    body('password','password cannot be blank').exists(),
],async(req,res)=>{
    let success=false;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }  
    
    const {email,password}=req.body;
    try{
        let user=await User.findOne({email});
        if(!user){
            success=false;
            return res.status(400).json({success,error:"Please enter valid crediantals"})
        }

        const comparepassword=await bcrypt.compare(password,user.password);
        if(!comparepassword){
            success=false;
            return res.status(400).json({success,errors:"Please enter valid crediantals"});
        }

        const data={
            user:{
                id:user.id
            }
        }
        const authtoken=jwt.sign(data,JWT_SECRET);
        success=true
        res.json({success,authtoken})
    }catch(error){
        console.error(error.message);
    res.status(500).send("Some error occured")
    }
})

