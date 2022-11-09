
const productModel = require('./model');

/**
 * 
 * lay danh sach tat ca san pham tu database
 */

exports.getProducts = async () =>{
  //select * from  products
    const products = productModel.find().populate('category_id')
    return products;
    //return data;
}


/**
 * lấy thông tin 1 sp
 */

exports.getById = async (id) => {
    // const product = data.filter(item => item._id == id)[0];
    // return product;

    const product = await productModel.findById(id).populate('category_id');
    return product;
}

/**
 * xoas sp theo id
 */
exports.delete = async (id)=>{
  //data = data.filter(item => item._id !=id)
  await productModel.findByIdAndDelete(id);
}

/**
 * theme mới sản phẩm
 */

exports.insert = async  (product) =>{
  const p = new productModel(product);
  await p.save();
  //data.push(product);
}


/**
 * sữa thông tin sp
 * spread operator
 */

exports.update = async (id, product) => {
    // data = data.map(item => {
    //   if (item._id == id){
    //     item = {...item, ...product}
    //   }
    //   return item;
    // })

    await productModel.findByIdAndUpdate(id, product);
}