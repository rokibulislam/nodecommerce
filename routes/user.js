const express = require('express');
const router = express.Router();

const { userById, read, update, purchaseHistory } = require( "../controller/user" );


// const { requireSignin } = require( "../controller/auth" );


router.get('/user/:userId', read)

router.put('/user/:userId', update)

router.get('/order/by/user/:userId', purchaseHistory)

router.param("userId", userById );

module.exports = router;