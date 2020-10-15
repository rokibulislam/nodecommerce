const  mongoose = require('mongoose');
const morgan = require('morgan')
const bodyParser = require('body-parser');

const categorySchema =  new mongoose.Schema( {
    name: {
        type: String,
        trim: true,
        required: true,
        maxlength: 32,
        unique: true
    },
}, {timestamp: true} );




module.exports = mongoose.model( 'Category', categorySchema)