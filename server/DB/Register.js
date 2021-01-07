const mongoose = require('mongoose');

const usersSchema = new mongoose.Schema({
    firstName:{ type: String, require: true},
    lastName:{type: String, require: true},
    userName:{type: String, require: true},
    password:{type: String, require: true,}
});

module.exports = User = mongoose.model('user', usersSchema);

