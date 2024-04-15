const mongoose = require("mongoose");
require("dotenv").config();


const connectDB = ()=>{
 
    console.log("You have successfully connected with the database..")
    return mongoose.connect(process.env.MONGO_URI,{
        // useNewUrlParser:true,
        // useUnifiedTopology:true,
    })
};

module.exports = connectDB ;