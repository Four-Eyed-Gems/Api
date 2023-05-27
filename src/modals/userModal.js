const mongoose = require('mongoose');
const User = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    password: String
})

module.exports = mongoose.model("User", User);