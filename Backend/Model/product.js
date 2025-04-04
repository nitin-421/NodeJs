const mongoose = require('mongoose')

const { Schema } = mongoose;
const productSchema = new Schema({
	title: {type:String, required: true, unique: true},
	description: {type:String, required: true},
	stock: {type:Number, min:[0,'invalid stock'], required: true},	
	price: {type:Number, required: true, min:[0,'invalid price'], required: true},
	discountPercentage: Number,
	rating: {type:Number, min:[0,'too less rating'], max:[5, 'max rating' ],default:0},
	category: {type:String, },
	thumbnail: {type:String, },
	images: [String]
});
exports.Product = mongoose.model('Product', productSchema);