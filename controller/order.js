const { Order, CartItem } = require('../models/order')

exports.orderById = ( req, res, next, id ) => {
        
    Order.find(id).exec( ( err, order ) => {
        if( err || !product ) {
            return res.status(400).json({
                error: 'Product not found'
            })
        }

        req.order = order;
        next();
    });
};

exports.create = ( req, res ) =>  {

};

exports.listOrders = ( req, res ) =>  {

};

exports.getStatusValues = ( req, res ) => {

};

exports.updateOrderStatus = ( req, res ) =>  {

}
