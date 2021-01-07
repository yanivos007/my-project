const express = require("express");
const mongoose = require("mongoose");
const Vacations = require("../DB/VacationsList");
const bcrypt = require('bcrypt');
const route = express.Router();

route.post('/post', async (req,res)=>{
    const {description , destination, dates, price} = req.body
    let vacation ={};
    vacation.description = description;
    vacation.destination = destination;
    vacation.dates = dates;
    vacation.price = price;

})

