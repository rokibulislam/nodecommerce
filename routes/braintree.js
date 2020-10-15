const express = require('express');
const route = express.Router();

const { isAdmin, isAuth } = require('../controller/auth')

const {userById } = require('../controller/user')

const { generateToken, processPayment } = require('../controller/braintree')

route.get('/braintree/getToken/:userId', generateToken )

router.post('/braintree/:userId', processPayment)

router.param('userId', userById)

module.exports = router;