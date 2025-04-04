require('dotenv/config');
const mongoose = require('mongoose');
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const path = require('path');
const productRouter = require('./RoutersFolder/product.js');

const server = express();

main().catch(err => console.log(err, "Error in DB connection"));
async function main() {
  await mongoose.connect(process.env.MONGODB_URL);
  console.log('Connected to DB');
}

server.use(cors())
  .use(express.json())
  .use(morgan('combined'))
  // .use(express.static(path.resolve(__dirname, process.env.PUBLIC_DIR)))
  .use('/products', productRouter.router)
  // .use('*', (_, res) => {
  //   res.sendFile(path.resolve(__dirname, 'build', 'index.html'));
  // })
  .listen(process.env.PORT, () => {
    console.log('Server Started on port', process.env.PORT || 2000);
  });
