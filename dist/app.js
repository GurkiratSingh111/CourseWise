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
require("dotenv").config();
require("express-async-errors");
const express_1 = __importDefault(require("express"));
const express_fileupload_1 = __importDefault(require("express-fileupload"));
const cloudinary_1 = require("cloudinary");
const app = (0, express_1.default)();
cloudinary_1.v2.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.CLOUD_API_KEY,
    api_secret: process.env.CLOUD_API_SECRET,
});
const adminAuthRoutes_1 = __importDefault(require("./routes/adminAuthRoutes"));
const userAuthRoutes_1 = __importDefault(require("./routes/userAuthRoutes"));
const courseRoutes_1 = __importDefault(require("./routes/courseRoutes"));
const meRoute_1 = __importDefault(require("./routes/meRoute"));
const connect_1 = __importDefault(require("./db/connect"));
const cors_1 = __importDefault(require("cors"));
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use((0, express_fileupload_1.default)({ useTempFiles: true }));
app.use("/api/v1", adminAuthRoutes_1.default);
app.use("/api/v1", userAuthRoutes_1.default);
app.use("/api/v1", courseRoutes_1.default);
app.use("/api/v1", meRoute_1.default);
const PORT = process.env.PORT || 4000;
const startServer = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield (0, connect_1.default)(process.env.MONGO_URI);
        console.log("Successfully connected to the database");
        app.listen(PORT, () => {
            console.log(`Server is listening on PORT ${PORT}`);
        });
    }
    catch (error) {
        console.log(error);
    }
});
startServer();
