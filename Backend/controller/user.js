const fs = require('fs');
const data = JSON.parse(fs.readFileSync('D:/CODE/Algozenith/MERN/Backend/data.json', 'utf-8'));
const users = data.users;

exports.addProduct = (req,res)=>{
  console.log(req.body) 
  users.push(req.body)
  res.json(req.body).status(200)
}

exports. getAllProducts = (req,res)=>{
	res.json(data)
}

exports.getProduct = (req,res)=>{
	const id = +req.params.id
	const product = users.find(p=>p.id===id)
	res.json(product)
}

exports.overWriteProduct = (req,res)=>{
	const id = +req.params.id 
	const productIndex = users.findIndex(p=>p.id===id)
	users.splice(productIndex,1,{...req.body,id:id})
	res.json().status(200)
}

exports.updateProduct = (req,res)=>{
	const id = +req.params.id 
	const productIndex = users.findIndex(p=>p.id===id)
	const product = users[productIndex]
	users.splice(productIndex,1,{...product,...req.body})
	res.json().status(200)
}

exports.deleteProduct = (req,res)=>{
	const id = +req.params.id 
	const productIndex = users.findIndex(p=>p.id===id)
	const product = users[productIndex]
	users.splice(productIndex,1)
	res.json(product).status(200)
}