const fs = require("fs");
const model = require("../Model/product");
const Product = model.Product;

exports.addProduct = (req, res) => {
  const product = new Product(req.body);
  product
    .save()
    .then((doc) => {
      if (doc)
        res.status(200).json(doc)
      else
        console.log("No document was saved.");
    })
    .catch((err) => {
      if (err)
        res.status(200).json(err)
    });
};

exports.getAllProducts = async (req, res) => {
  const products = await Product.find();
	res.json(products)
};

exports.getProduct = async (req, res) => {
  const id = req.params.id;
  const products = await Product.findById(id);
  res.json(products);
};

exports.replaceProduct = async(req, res) => {
  const id = req.params.id;
  try{
    const doc = await Product.findOneAndReplace({_id:id},req.body,{new:false})
    res.json(doc).status(200)
  }
  catch(err){
    res.status(400).json(err)
  }
};

exports.updateProduct = async (req, res) => {
  const id = req.params.id;
  try{
    const product = await Product.findOneAndUpdate({_id:id},req.body,{new:true})
    res.json(product).status(200)
  }
  catch(err){
    res.status(400).json(err)
  }
};

exports.deleteProduct = async (req, res) => {
  const id = req.params.id;
  try{
    const product = await Product.findOneAndDelete()
    res.json(product).status(200)
  }
  catch(err){
    res.status(400).json(err)
  }
};
