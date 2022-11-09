const cartService = require ('./service');


/**
 * lấy cart theo user_id
 */


exports.getByUserId = async (user_id) => {
    let cart = await cartService.getByUserId(user_id);
    cart = {
        _id : cart._id,
        total: cart.total,
        user_id: cart.user_id
    };
    return cart;
}

exports.insert = async (total, user_id) =>{
await cartService.insert(total, user_id);
}

exports.update = async (id, total) =>{
    await cartService.update(id, total);
}