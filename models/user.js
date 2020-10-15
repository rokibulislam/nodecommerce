const  mongoose = require('mongoose');
const crypto = require('crypto');
// const uuidv1 = require('uuid/v1');
const morgan = require('morgan')
const bodyParser = require('body-parser');

const userSchema =  new mongoose.Schema( {
    
    name: {
        type: String,
        trim: true,
        required: true,
        maxlength: 32
    },

    email: {
        type: String,
        trim: true,
        required: true,
        maxlength: 32
    },

    hashed_password: {
        type: String,
        required: true
    },

    about: {
        type: String,
        trim: true
    },

    salt: String,

    role: {
        type: Number,
        default: 0
    },

    history: {
        type: Array,
        default: []
    }

    
}, {timestamp: true} );


userSchema.virtual('password').set( function( password) {
    this._password = password
    // this.salt = uuidv1();
    this.salt = ''
    this.hashed_password = this.encryptPasswod( password );
}).get( function() {
    return this._password;
});

userSchema.methods = {

    authenticate: function(plainText) {
        return this.encryptPasswod(plainText) === this.hashed_password;
    },

    encryptPasswod : function( password ) {
        if( !password )  return "";
        try {
            return crypto.createHmac('sha1', this.salt)
            .update(password)
            .digest('hex');

        } catch( err ) {
            return ""
        }
    }
}

module.exports = mongoose.model( 'User', userSchema)