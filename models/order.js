const mongoose = require('mongoose');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const { ObjectId } = mongoose.Schema;

const shippingSchema = {
	address: { type: String, required: true },
	city: { type: String, required: true },
	postCode: { type: String, required: true },
	country: { type: String, required: true }
};

const cartItemSchema = new mongoose.Schema(
	{
		Product: { type: ObjectId, ref: 'Product' },
		name: String,
		Price: Number,
		Count: Number
	},
	{ timestamp: true }
);

const CartItem = mongoose.model('CartItem', cartItemSchema);

const orderSchema = new mongoose.Schema(
	{
		Products: [ cartItemSchema ],
		transaction_id: {},
		amount: { type: Number },
		address: String,
		status: {
			type: String,
			default: 'Not Processed',
			enum: [ 'Not processed', 'Processing', 'Shipped', 'Delivered', 'Cancelled' ]
		},
		updated: Date,
		user: { type: ObjectId, ref: 'User' }
	},
	{ timestamp: true }
);

const Order = mongoose.model('Order', orderSchema);

module.exports = { Order, CartItem };
