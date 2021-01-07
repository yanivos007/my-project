const mongoose = require('mongoose');

const vacationsSchema = new mongoose.Schema({
description: {type: String}, 
destination: {type: String}, 
dates: {type: Date}, 
price: {type: String}, 

});

module.exports = mongoose.model('vacations', vacationsSchema );