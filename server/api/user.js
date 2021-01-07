const express = require("express");
const mongoose = require("mongoose");
const User = require("../DB/register");
const bcrypt = require('bcrypt');
const route = express.Router();

route.post('/post', async (req, res)=>{
    
    const {firstName, lastName, userName, password} = req.body;
    let user = {};
    user.firstName = fullName;
    user.Name = fullName;
    user.userName = userName;
    user.password = password;

    let findUser = await User.findOne({userName: req.body.userName});
    if(findUser){
        return res.status(400).send('That user already exisits!')
    } else{

        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(user.password, salt)
        let userModel = new User(user);
        await userModel.save();
        try{
            return res.status(200).json({userModel, message: "Created new User"});
        } catch(err){
            return res.status(400).json({ message: err.message })
        }
    }
})

module.exports = route;