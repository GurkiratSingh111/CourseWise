import express from "express";
const router = express.Router();
import { authUser } from "../middleware/authmiddleware";
import { meRoute } from "../controllers/meController";

router.route("/me").get(authUser, meRoute);

export default router;
