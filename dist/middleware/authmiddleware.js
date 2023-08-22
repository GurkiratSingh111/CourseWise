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
exports.authAdmin = exports.authUser = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const authUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    // check header
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith("Bearer")) {
        res.send("Token not in correct format");
    }
    if (authHeader) {
        const token = authHeader.split(" ")[1];
        try {
            const payload = jsonwebtoken_1.default.verify(token, process.env.JWT_SECRET);
            // attach the user to the job routes
            //req.user = { userId: payload.userId };
            req.headers["userId"] = payload.userId;
            next();
        }
        catch (error) {
            res.send(error);
        }
    }
});
exports.authUser = authUser;
const authAdmin = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    // check header
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith("Bearer")) {
        res.send("Token not in correct format");
    }
    if (authHeader) {
        const token = authHeader.split(" ")[1];
        try {
            const payload = jsonwebtoken_1.default.verify(token, process.env.JWT_SECRET);
            // attach the user to the job routes
            req.headers["userId"] = payload.userId;
            next();
        }
        catch (error) {
            res.send(error);
        }
    }
});
exports.authAdmin = authAdmin;
