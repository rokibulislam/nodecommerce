const Category = require('../models/category');
const Product = require('../models/product');


exports.categoryById = ( req, res, next, id ) => {
        Category.findById(id).exec( (err, category ) => {

            if( err || !category ) {
                return res.status(400).json({
                    error: 'Category does not exist'
                })
            }

            req.category = category;

            next();
        });
};  

exports.create = ( req, res ) => {
    
    console.log("req body", req.body);
    
    const category = new Category(req.body);

    category.save( (err, data) => {
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

exports.read = ( req, res ) => {
    return res.json( req.category );
};

exports.update = ( req, res ) => {

    const category = req.category;
    category.name = req.body.name;
    
    category.save( (err, data) => {
        if( err ) {
            return res.status(400).json({
                error: err
            });
        }

        res.json(data);
    });
};

exports.remove = ( req, res ) => {
    const category = req.category;

    Product.find(category).exec( ( err, data ) => {
        
        if( data.length >= 1 ) {
        
            return res.status(400).json({
                message: `Sorry. You cant delete ${category.name}. It has ${data.length} associated products.`
            })
        
        } else {
           
            category.remove( ( err, data ) => {
                if( err ) {
                    return res.status(400).json({
                        error: err
                    });
                }
        
                res.json({
                    message: 'Category Deleted'
                });
            });
        }

        res.json( data );
    });
    
};

exports.list = ( req, res ) => {

    Category.find().exec( ( err, data ) => {
        if( err ) {
            return res.status(400).json({
                error: err
            })
        }

        res.json( data );
    });
};