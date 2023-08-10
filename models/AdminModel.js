const mongoose = require('mongoose');

const AdminSchema = new mongoose.Schema({
    role: {
        type: String,
        default: "admin"
    },
    name: {
        type: String,
        required: [true, "Please provide name"],
        maxlength: 50,
        minlength: 3,
    },
    email: {
        type: String,
        required: [true, "Please provide email"],
        unique: true,
        match: [
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            'Please provide a valid email',
        ],
    },
    password: {
        type: String,
        required: [true, "Please provide password"],
        minlength: 6,
    }


})

module.exports = mongoose.model('Admin', AdminSchema);