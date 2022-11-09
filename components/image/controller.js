const imageService = require('./service');


// lay toan bo hinh anh
exports.getImages = async () =>{
    let data = await imageService.getImages();
    data = data.map(item => {
        item = {
            _id : item._id,
            image : item.image,
            product_id : item.product_id
        }
        return item;
    })
    return data;
}

// lay hinh anh theo id

exports.getImagesById = async () =>{
    let img = await imageService.getById(id);
    img = {
        _id :img._id,
        image : img.image,
        product_id : img.product_id
    }
    return img;
}

exports.insert_image = async (body) =>{
    await imageService.insert(body);
}

exports.update = async (id, img) =>{
    await imageService.update(id, img);
}
