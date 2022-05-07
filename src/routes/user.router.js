const express = require("express");
const { getAllUsers,addNewUser } = require("../model/User.model");
const router = express.Router();

router.all("/",(req,res)=>{
    next()
})

router.get("/v1/user",async(req,res)=>{
    try{
    const result = await getAllUsers()
    if(result.length){
        return res.json({
            status:"success",
            result
        })
    }
   }catch(error){
       return res.json({
           status:"error",
           message:error.message
       })
   }

})

router.post("/v1/user/login",async(req,res) => {
    try{
        const {role} = req.body;
        if(role != 'admin'){
           return res.json({
               status:"unauthorized",
               message:"Your are not authorized"
           })
        }
        return res.json({
            status:"success",
            message:"You are successfully logged in"
        })
    }catch(error){
        return res.json({
            status:"error",
            message:error.message
        })

    }
})

router.post("v1/user/add-user",async(req,res) => {
    try{
        const { firstname , lastname , email, role, dob, state , city } = req.body;
        const result = await addNewUser(firstname , lastname , email, role, dob, state , city)
        if(result.length){
            return res.json({
                status:"success",
                message:"Successfully added user"
            }) 
        }
        return res.json({
            status:"error",
            message:"Unable to add User "
        })
    }catch(error){
        return res.json({
            status:"error",
            message:error.message
        })
    }
})