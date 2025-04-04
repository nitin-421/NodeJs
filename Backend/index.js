require('dotenv').config()
const mongoose = require('mongoose')
const express = require('express');
const morgan = require('morgan');
const server = express();
const cors = require('cors');
const productRouter = require('./RoutersFolder/product.js');

main().catch(err => console.log(err,"Error in DB connection"));
async function main() {
  await mongoose.connect(process.env.MONGODB_URL)
  console.log('Connected to DB');
}

server.use(cors());
server.use(express.json());
server.use(morgan('combined'))
server.use('/products',productRouter.router)


server.listen(process.env.PORT, ()=>{
	console.log('Server Started 2000');
})

// sequence of middleware is important