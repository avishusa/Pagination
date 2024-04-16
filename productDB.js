const connectDB = require('./db/connect.js');
require('dotenv').config();
const Product = require("./models/product.js");
const ProductJson = require("./products.json");

const start = async ()=>{
    try {
        await connectDB(process.env.MONGO_URI);
        await Product.create(ProductJson);
        console.log("Sucess")
    } catch (error) {
        console.log(error)
    }
};

start();