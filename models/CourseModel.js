const mongoose = require('mongoose');

const CourseSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please provide name"],
        maxlength: 50,
        minlength: 3,
    },
    price: {
        type: String,
        required: [true, "Please provide price"],
    },
    description: {
        type: String,
        required: [true, "Please provide description"],
        maxlength: 50,
        minlength: 3,
    },
    image: {
        type: String,
        required: [true, "Please provide image"]
    },
    published: {
        type: Boolean,
        default: false,
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Admin',
        required: [true, 'Please provide admin'],
    },
}, { timestamps: true })

module.exports = mongoose.model("Course", CourseSchema);