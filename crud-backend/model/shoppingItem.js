const mongoose = require('mongoose');

const shoppingItemSchema = mongoose.Schema( {
    itemName: {
        type: String,
        required: true
    },
    itemQuantity: {
        type: Number,
        required: true,
    },
    itemBought: {
        type: String,
        required: true
    }
});

const item = mongoose.model('Item', shoppingItemSchema);

module.exports = item;