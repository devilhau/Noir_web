var express = require('express');
var router = express.Router();

const userController = require('../components/user/controller');
const productController = require('../components/products/controller');
const cartController = require('../components/carts/controller');
const cart_itemController = require('../components/cart_item/controller');
const jwt = require('jsonwebtoken');

/**
 * page: register
 * http://localhost:3000/api/register
 * method: post
 */
 router.post('/register', async function (req, res, next) {
    const { username, password, confirm_password} = req.body;
    // kiểm tra username, password
    const result = await userController.register(username, password, confirm_password);
    if (result) {
        res.json({ status: true });
    } else {
        res.json({ status: false });
    }
});

/**
 * page: login
 * http://localhost:3000/login
 * method: post
 */
 router.post('/login', async function (req, res, next) {
    const { username, password } = req.body;
    const result = await userController.login(username, password);
    if (result) {
        const token = jwt.sign({ _id: result._id, username: result.username }, 'mykey');
        res.json({ status: true , result, token });
    } else {
        res.json({ status: false });
    }
});

/**
 * page: edit profile
 * http://localhost:3000/edit_profile
 * method: post
 */
 router.post('/edit_profile', async function (req, res, next) {
    const { id, name, phone_number } = req.body;
     await userController.editProfile( id, name, phone_number );
});

/**
 * page: products
 * http://localhost:3000/api/products
 * method: get
 */
router.get("/products", async function (req, res, next) {
    const products = await productController.getProducts();
    res.json(products);
});
/**
 * page: products detail
 * http://localhost:3000/api/product/id/detail
 * method: get
 */
router.get("/products/:id/detail", async function (req, res, next) {
    const { id } = req.params;
    const product = await productController.getById(id);
    res.json(product);
});


/**
 * page: cart
 * http://localhost:3000/api/insert_cart
 * method: post
 */
router.post('/insert_cart', async function (req, res, next) {
    const { total, user_id } = req.body;
    await cartController.insert(total, user_id);
});

/**
 * chỉnh sữa total trong cart
 * page: cart
 * http://localhost:3000/api/update_cart
 * method: post
 */
 router.post('/update_cart', async function (req, res, next) {
    const { total, user_id } = req.body;
    await cartController.update(total, user_id);
});

/**
 * delete cart
 * page: cart
 * http://localhost:3000/api/delete
 * method: delete
 */
 router.delete('/:id/api/delete', async function (req, res, next) {
    const {id} = req.params;
    await cartController.delete(id);
});

/**
 * page: cart_item
 * http://localhost:3000/api/insert_cart_item
 * method: post
 */
 router.post('/insert_cart_item', async function (req, res, next) {
    const { price, quantity, cart_id, product_id } = req.body;
    await cart_itemController.insert(price, quantity, cart_id, product_id);
});

/**
 * chỉnh sữa peice, quantity trong cart_item
 * page: cart
 * http://localhost:3000/api/update_cart_item
 * method: post
 */
 router.post('/update_cart_item', async function (req, res, next) {
    const { id, price, quantity } = req.body;
    await cart_itemController.update(id, price, quantity);
});

/**
 * delete cart_item
 * page: cart
 * http://localhost:3000/:id/api/delete
 * method: delete
 */
 router.delete('/:id/api/delete', async function (req, res, next) {
    const {id} = req.params;
    await cart_itemController.delete(id);
});

module.exports = router;