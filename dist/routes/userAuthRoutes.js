"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const router = express.Router();
const userAuthController_1 = require("../controllers/userAuthController");
router.route("/userlogin").post(userAuthController_1.userLogin);
router.route("/usersignup").post(userAuthController_1.userSignup);
exports.default = router;
