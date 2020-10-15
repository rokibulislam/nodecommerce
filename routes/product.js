const express = require('express');
const router = express.Router();

const { create, productById, read, remove, update, list, 
        listRelated, listCategories, listBySearch, photo, listSearch 
    } = require( "../controller/product" );

const { isAdmin, isAuth } = require('../controller/auth')

const { userById } = require('../controller/user')


router.get('/prodcut/:productId', read)

router.post('/prodcut/:productId', create)

router.delete('/products/:productId/:userId', remove)
router.put('/products/create/:userId', update)

router.get('/prodcuts', list)
router.get('/products/search', listSearch)
router.get('/products/related/:productId', listRelated)
router.get('/products/categories', listCategories)
router.post('/products/by/search', listBySearch)
router.get('/product/photo/:productId', photo)

router.param("userId", userById)

router.param("productId", productById)

module.exports = router;