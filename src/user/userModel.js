const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    
    phone: {
        type: "string",
        required: true,
        unique: true,
    },
    email: {
        type: "string",
        required: true,
    },
    name: {
        type: "string",
        required: true,
    }
});

const User = mongoose.model("User", userSchema);

module.exports = User;