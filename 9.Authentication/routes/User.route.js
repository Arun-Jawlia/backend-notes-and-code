const express = require('express');
const UserModel = require('../models/user.model');
const UserRouter = express.Router()
const jwt = require('jsonwebtoken')


UserRouter.get("/", (req,res)=>
{
    res.send('Welcome to user auth page')
})


UserRouter.post('/signup', async(req,res)=>
{
   try {
    const payload = req.body
    const newUser = await UserModel(payload)
    await newUser.save()
    res.status(200).send(newUser)

   } catch (error) {
    res.status(500).send(error.message)
    
   }
    

})
UserRouter.post('/login', async(req,res)=>
{
    const {email, password} = req.body
    try {
        const user = await UserModel.find({email, password})
        if(user)
        {
            const token = jwt.sign({userId:user._id}, "Jawlia")
            res.status(200).send({user:user, token:token})
        }else{

            res.status(404).send('User Not Found')
        }
        
        
    } catch (error) {
        res.status(500).send(error.message)
    }



})

UserRouter.get("/about", async(req,res)=>
{

    res.status(200).send("Hello you are authenticated")
})
UserRouter.get("/private", async(req,res)=>
{
    let token = req.headers.authorization.split(' ')[1]
    let decoded =  jwt.verify(token, "Jawlia", (err,decoded)=>
    {
        if(err)
        {
            res.send("Invalid Token")
        }
        else if(decoded){
            res.status(200).send({message:"Hello you are authenticated and Authorised", decoded})
            // console.log(decoded)
        }
    })
  

})



module.exports = UserRouter