"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const CourseSchema = new mongoose_1.default.Schema({
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
        maxlength: 200,
        minlength: 3,
    },
    image: {
        type: String,
        required: [true, "Please provide image"],
    },
    published: {
        type: Boolean,
        default: false,
    },
    createdBy: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: "Admin",
        required: [true, "Please provide admin"],
    },
}, { timestamps: true });
exports.default = mongoose_1.default.model("Course", CourseSchema);
