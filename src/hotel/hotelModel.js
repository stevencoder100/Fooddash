const mongoose = require("mongoose");

const tempSchema = new mongoose.Schema({
    name: {
        type: "string",
        default: '',
    },
    img: {
        type: "string",
        default: '',
    },
    price: {
        type: "string",
        default: '',
    },
    pureveg: {
        type: Boolean,
        default: true,
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
        default: '',
    },
    img: {
        type: "string",
        default: '',
    },
    items: [tempSchema]
});

const hotelSchema = new mongoose.Schema({
    name: {
        type: String,
        default: '',
    },
    img: {
        type: String,
        default: '',
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
        default: true
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
    longitude: {
        type: String,
        default: ''
    },
    latitude: {
        type: String,
        default: ''
    }

});

const categoriesSchema = new mongoose.Schema({
    name: {
        type: "string",
        default: '',
    },
    img: {
        type: "string",
        default: ''
    },
    mains: [hotelSchema]
});

const orderSchema = new mongoose.Schema({
    phone: {
        type: "string",
        required: true,
        unique: true,
    },
    email: {
        type: "string",
        required: true,
    },
    username: {
        type: "string",
        required: true,
    },
    restaurantName: {
        type: "string",
        required: true,
    },
    foodItems: [{
        name: {
            type: "string",
            required: true,
        },
        quantity: {
            type: Number,
            required: true,
        },
        price: {
            type: "string",
            required: true,
        }
    }],
    total: {
        type: "string",
        default: '',
    }
});

const hotel = mongoose.model('hotel', hotelSchema);
const item = mongoose.model('item', itemSchema);
const category = mongoose.model('category', categoriesSchema);
const order = mongoose.model('order', orderSchema);

// Export models
module.exports = { hotel, item, category, order };
