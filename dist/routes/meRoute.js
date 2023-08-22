"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const authmiddleware_1 = require("../middleware/authmiddleware");
const meController_1 = require("../controllers/meController");
router.route("/me").get(authmiddleware_1.authUser, meController_1.meRoute);
exports.default = router;
