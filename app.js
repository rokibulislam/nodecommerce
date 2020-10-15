const express = require('express')
const mongoose = require('mongoose')
const app = express();
const morgan = require('morgan')
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const expressValidator = require('express-validator')

require("dotenv").config();

const categoryRoutes = require('./routes/category')
const productRoutes = require('./routes/product')
const authRoutes = require('./routes/auth')
const userRoutes = require('./routes/user')

//db
// mongoose.connect('', {
//     useNewUrlParser: true,
//     useCreateIndex: true
// }).then( () => {
//     console.log( 'Database Connected ');
// });


//routes

// route Middleware
app.use(express.json());
app.use(morgan('dev'))
app.use(cookieParser())
app.use(bodyParser.json())
// app.use( expressValidator() )

app.use( '/api' ,productRoutes );
app.use( '/api' ,categoryRoutes );
app.use( '/api' ,authRoutes );
app.use( '/api' ,userRoutes );


app.get('/', (req,res) => {
    res.send("hello from node");
});

const port = process.env.PORT || 8000;

app.listen(port, () => {
    console.log(`server is running ${port}`);
});