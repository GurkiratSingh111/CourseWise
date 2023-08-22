import express from "express";
const router = express.Router();
import { adminLogin, adminSignup } from "../controllers/adminAuthController";

router.route("/adminlogin").post(adminLogin);
router.route("/adminsignup").post(adminSignup);
export default router;
