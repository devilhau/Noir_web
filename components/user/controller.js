// tầng xử lý
const userService = require('./service');
const bcrypt = require('bcryptjs');

exports.login = async (username, password) => {
    const user = await userService.login(username);
    // console.log('login', username, password, user)
    // if (user && user.password == password) {
    //     return user;
    // }
    // return null;
    console.log(user, username, password);
    if(!user) return null;
    const checkPassword = await bcrypt.compare(password, user.password);
    console.log(checkPassword, password, user.password);
    if (!checkPassword) return null;
    return {_id: user._id, username: user.username};
    
}

exports.register= async (username, password, confirm_password) => {
    if (password != confirm_password) return null;
    let user = await userService.login(username);
    if (user) return null;

    const hash = await bcrypt.hash(password, await bcrypt.genSalt(10));
    user = await userService.register(username, hash);
    return {_id: user._id};
}

exports.editProfile = async (id, name, phone_number) => {
    await user.editProfile(id, name, phone_number);
}