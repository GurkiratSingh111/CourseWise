"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const UserSchema = new mongoose_1.default.Schema({
    role: {
        type: String,
        default: "user",
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
            "Please provide a valid email",
        ],
    },
    password: {
        type: String,
        required: [true, "Please provide password"],
        minlength: 6,
    },
    purchasedCourses: [
        {
            type: mongoose_1.default.Schema.Types.ObjectId,
            ref: "Course",
        },
    ],
});
exports.default = mongoose_1.default.model("User", UserSchema);
