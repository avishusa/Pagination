const Prodcut = require('../models/product.js')
const getAllProducts = async(req,res)=>{
    const data = await Prodcut.find({});
    res.status(200).json({data})
}

const getAllProductsTesting = async(req,res)=>{

    res.status(200).json({msg:"This is the test"})
}

module.exports={getAllProducts,getAllProductsTesting}