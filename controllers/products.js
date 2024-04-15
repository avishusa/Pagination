const getAllProducts = async(req,res)=>{

    res.status(200).json({msg:"This is the product api"})
}

const getAllProductsTesting = async(req,res)=>{

    res.status(200).json({msg:"This is the test"})
}

module.exports={getAllProducts,getAllProductsTesting}