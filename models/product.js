const mongoose = require('mongoose');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const category = require('./category');

const { ObjectId } = mongoose.Schema;

const reviewSchema = new mongoose.Schema(
	{
		name: { type: String, required: true },
		rating: { type: Number, default: 0 },
		comments: { type: String, required: true }
	},
	{ timestamps: true }
);

const productSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			trim: true,
			required: true,
			maxlength: 32
		},

		description: {
			type: String,
			required: true,
			maxlength: 2000
		},

		price: {
			type: Number,
			trim: true,
			required: true
		},

		category: {
			type: ObjectId,
			ref: 'Category',
			required: true
		},

		quantity: {
			type: Number
		},

		photo: {
			data: Buffer,
			contentType: String
		},

		shipping: {
			required: false,
			type: Boolean
		}
	},
	{ timestamp: true }
);

module.exports = mongoose.model('Product', productSchema);
