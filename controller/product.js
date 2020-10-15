const Product = require('../models/product')


exports.productById = ( req, res, next, id ) => {
    
    Product.find(id).exec( ( err, product ) => {
        if( err || !product ) {
            return res.status(400).json({
                error: 'Product not found'
            })
        }

        req.product = product;
        next();
    });
}

exports.read = ( req, res ) => {
    return res.json( req.product );
}

exports.create = ( req, res ) => {
    
    console.log("req body", req.body);
    
    const product = new Product(req.body);

    product.save( (err, data) => {
        if( err ){
            res.status(400).json({
                err
            });
        }

        res.json({
            data
        })
    })
};

exports.remove = ( req, res ) => {
    let product = req.product;

    product.remove( (err, data ) => {
        if( err ) {
            return res.status(400).json({
                error: err
            })
        }

        res.json( {
            message: 'Product deleted Successfully '
        })
    })
}

exports.update = ( req, res ) => {

};

exports.list = ( req, res ) => {


};

exports.listRelated = ( req, res ) => {


};

exports.listCategories = ( req, res ) => {

};

exports.listBySearch = ( req, res ) => {

};

exports.photo = ( req, res ) => {

};

exports.listSearch = ( req, res ) => {

};
