const express = require('express');
const router = express.Router();


const { isAuth, isAdmin } = require('../controller/auth')
const { userById, addOrderToUserHistory } = require( "../controller/user" );

const { create, listOrders, getStatusValues, orderById, updateOrderStatus } = require('../controller/order');
const { route } = require('./user');

// const { requireSignin } = require( "../controller/auth" );


route.get('/order', listOrders);

route.get('/order/status/:userId', getStatusValues )

route.put( '/order/', updateOrderStatus)

router.param("userId", userById );
router.param("orderId", orderById );

module.exports = router;