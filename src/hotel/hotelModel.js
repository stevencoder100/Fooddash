const mongoose = require("mongoose");

const tempSchema = new mongoose.Schema({
    name: {
        type: "string",
        required: true
    },
    img: {
        type: "string",
        required: true
    },
    price: {
        type: "string",
        default: '',
    },
    rating: {
        type: String,
        default: '',
    },
    raters: {
        type: String,
        default: '',
    },
    description: {
        type: String,
        default: '',
    }
});

const itemSchema = new mongoose.Schema({
    name: {
        type: "string",
        required: true
    },
    img: {
        type: "string",
        required: true
    },
    items: [tempSchema]
});

const hotelSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    img: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    rating: {
        type: String,
        default: '',
    },
    raters: {
        type: String,
        default: '',
    },
    delivery: {
        type: String,
        required: true,
    },
    pureveg: {
        type: Boolean,
        required: true,
    },
    types: {
        type: String,
        required: true,
    },
    distance: {
        type: String,
        required: true,
    },
    opentime: {
        type: String,
        default: ''
    },
    closetime: {
        type: String,
        default: ''
    },

});

const categoriesSchema = new mongoose.Schema({
    name: {
        type: "string",
        required: true
    },
    img: {
        type: "string",
        required: true
    },
    resturants: [hotelSchema]
});

const hotel = mongoose.model('hotel', hotelSchema);
const item = mongoose.model('item', itemSchema);
const category = mongoose.model('category', categoriesSchema);

// Export models
module.exports = { hotel, item, category };