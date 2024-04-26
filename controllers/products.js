const Product = require("../models/product.js");
const getAllProducts = async (req, res) => {
  const {company,name,featured,sort,select} = req.query;
  const queryObject={};

  if(company){
    queryObject.company=company;
  }

  if(name){
    queryObject.name={$regex:name,$options:"i"};
  }

  if(featured){
    queryObject.featured=featured;
  }

  let apiData=Product.find(queryObject)

  if(sort){
    let sortFix = sort.replace(","," ");
    apiData=apiData.sort(sortFix);
  }

  if(select){
    let selectFix = select.split(",").join(" ");
    apiData = apiData.select(selectFix)
  }

  const myData=await apiData
  res.status(200).json({ myData });
};

const getAllProductsTesting = async (req, res) => {
  res.status(200).json({ msg: "This is the test" });
};

module.exports = { getAllProducts, getAllProductsTesting };
