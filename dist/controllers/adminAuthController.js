"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.adminLogin = exports.adminSignup = void 0;
const AdminModel_1 = __importDefault(require("../models/AdminModel"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const adminSignup = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, name, password } = req.body;
    if (!email || !password || !name) {
        res.json("Missing credentials");
    }
    const existingAdmin = yield AdminModel_1.default.findOne({ email });
    if (existingAdmin) {
        res.status(404).json({ msg: "Admin already exists" });
    }
    const salt = yield bcryptjs_1.default.genSalt(10);
    const hashPassword = yield bcryptjs_1.default.hash(password, salt);
    const admin = yield AdminModel_1.default.create({
        email,
        name,
        password: hashPassword,
    });
    const token = jsonwebtoken_1.default.sign({ userId: admin._id }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_LIFETIME,
    });
    res.status(201).json({
        admin: {
            email: email,
            name: name,
            token,
            _id: admin._id
        },
    });
});
exports.adminSignup = adminSignup;
const adminLogin = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = req.body;
    if (!email || !password) {
        res.json("Missing credentials");
    }
    const admin = yield AdminModel_1.default.findOne({ email });
    if (!admin) {
        return res.status(404).json({ msg: "Admin not found" });
    }
    const isPasswordCorrect = yield bcryptjs_1.default.compare(password, admin.password);
    if (!isPasswordCorrect) {
        res.json("Invalid Credentials");
    }
    const token = jsonwebtoken_1.default.sign({ userId: admin._id }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_LIFETIME,
    });
    res.status(201).json({
        admin: {
            email: admin.email,
            name: admin.name,
            token,
            _id: admin._id
        },
    });
});
exports.adminLogin = adminLogin;
