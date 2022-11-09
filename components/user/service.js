const userModel = require('./model');



// tầng gọi database
exports.login = async (username) => {
    // const user = data.filter(i => i.username==emai)[0];
    // return user;
    // asswordselect id username p from  users where username = ''
    const user = await userModel.findOne({ username: username }, 'id username password');
    console.log('user: ', user);
    return user;

}

exports.register = async (username, password) => {
    const user = new userModel({ username, password});
    return await user.save();
}

exports.editProfile = async (id, name, phone_number) =>{
    await userModel.findByIdAndUpdate(id, name, phone_number);
}
