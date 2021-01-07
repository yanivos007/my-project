const mongoose = require("mongoose");

const URI = "mongodb+srv://dbUser:dbUser@cluster0.fudxw.mongodb.net/vacations?retryWrites=true&w=majority";

const connectBD = async ()=>{
   await mongoose.connect(URI, {
       useUnifiedTopology: true,
       useNewUrlParser: true});
   console.log("DB connected...")
}

module.exports = connectBD;