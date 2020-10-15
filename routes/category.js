const express = require('express');
const router = express.Router();

const { create, categoryById, read, update, remove, list } = require( "../controller/category" );

const { userById } = require('../controller/user')

router.get('/category/:categoryId', read)
router.post('/category/create/:userId', create );

router.put('/category/:categoryId/:userId', update );
router.delete('/category/:categoryId/:userId', remove );


router.get('/categories', list )

router.param('categoryId', categoryId )
router.param('userId', userById)

module.exports = router;