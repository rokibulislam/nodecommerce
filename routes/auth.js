const express = require('express');
const router = express.Router();

const { singup, singin, signout, requireSignin } = require( "../controller/auth" );

// const { userSingupValidator } = require('../validator')

// router.post('/singup',userSingupValidator, singup );
router.post('/singup', singup );

router.post('/singin', singin );

router.get('/singout', signout );

module.exports = router;