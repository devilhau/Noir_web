const cart_itemService = require ('./service');


/**
 * lấy cart theo user_id
 */


exports.getAll = async () => {
    let cart_item = await cart_itemService.getAll();
    cart_item= cart_item.map(item =>{
        item = {
            _id: item._id,
            price: item.price,
            quantity: item.quantity,
            cart_id: item.cart_id,
            product_id: item.product_id
        }
        return item;
    })
    return data;
}

exports.insert = async (price, quantity, cart_id, product_id) =>{
await cart_itemService.insert(price, quantity, cart_id, product_id);
}

exports.update = async (id, price, quantity) =>{
    await cart_itemService.update(id, price, quantity);

}

exports.delete = async (id) =>{
    await cart_itemService.delete(id);
}