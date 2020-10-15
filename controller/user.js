const User = require('../models/user')
const Order = require('../models/order')

exports.userById =  ( req, res, next, id ) => {

    User.findById(id).exec( (err, user ) => {
        if( err || !user ) {
            return res.status(400).json({
                error: 'User not found'
            })
        }
 
        req.profile = user
        next();
    })

};


exports.read = ( req, res ) => {

};

exports.update = ( req, res ) => {

};

exports.addOrderToUserHistory = ( req, res, next ) => {

};

exports.purchaseHistory = ( req, res ) => {

};