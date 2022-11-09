const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const cartSchema = new Schema({
    id: { type: ObjectId },
    total: { type: String },
    user_id: { type: Schema.Types.ObjectId, ref: 'user' }

});

module.exports = mongoose.model('cart', cartSchema);