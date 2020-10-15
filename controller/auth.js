const User = require('../models/user')
const jwt = require('jsonwebtoken'); // to generate json web token
const expressJwt = require('express-jwt') //for authorization check


exports.singup = ( req, res ) => {

    console.log("req body", req.body);
    
    const user = new User(req.body);

    user.save( (err, user) => {
        if( err ){
            res.status(400).json({
                err
            });
        }

        user.salt = undefined;
        user.hashed_password = undefined;

        res.json({
            user
        })
    })
};


exports.singin = ( req, res ) => {
    const { email, password } = req.body
    User.findOne( { email }, ( err, user ) => {
        
        if( err || !user ) {
            return res.status(400).json({
                error: "User with that email does not exist. please signup"
            });
        }

        if( !user.authenticate( password ) ) {
            return res.status(401).json({
                error: 'Email and password do not match'
            })
        }

        const token =jwt.sing( { _id: user._id}, process.env.JWT_SECRET )
        
        res.cookie( 't', token, { expire:  new Date() + 9999 });

        const { _id, name, email, role } = user

        return res.json({ token, user: { _id, name, email, role  } })
    });
};

exports.signout = ( req, res ) => {
    res.clearCookie("t");
    res.json({ message: "Signout success" });
}

// exports.requireSignin = expressJwt({
//     secret: process.env.JWT_SECRET,
//     useProperty: "auth"
// })

exports.isAdmin = ( req, res, next ) => {

    next();
};

exports.isAuth = ( req, res, next ) => {
    next();
};