const express = require("express");
const router = express.Router();
import { userLogin, userSignup } from "../controllers/userAuthController";

router.route("/userlogin").post(userLogin);
router.route("/usersignup").post(userSignup);

export default router;
