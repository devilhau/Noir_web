const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const userSchema = new Schema({
    id: { type: ObjectId },
    username: { type: String, required: true },
    password: { type: String },
    phone_number: { type: String},
    name: { type: String},
    address: { type: String},
    roles: {type: String}
});

module.exports = mongoose.model('user', userSchema);
//user là tên bảng 