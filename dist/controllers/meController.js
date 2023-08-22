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
exports.meRoute = void 0;
const AdminModel_1 = __importDefault(require("../models/AdminModel"));
const UserModel_1 = __importDefault(require("../models/UserModel"));
const meRoute = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const userId = req.headers["userId"];
    const user = yield UserModel_1.default.findOne({ _id: userId });
    if (!user) {
        const admin = yield AdminModel_1.default.findOne({ _id: userId });
        if (!admin) {
            res.json("No user/admin exist");
        }
        const { name, email, role, _id } = admin;
        return res.json({ name, email, role, _id });
    }
    const { name, email, role, _id } = user;
    console.log(user);
    return res.json({ name, email, role, _id });
});
exports.meRoute = meRoute;
