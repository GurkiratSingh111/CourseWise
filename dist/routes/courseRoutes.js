"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const courseController_1 = require("../controllers/courseController");
const authmiddleware_1 = require("../middleware/authmiddleware");
router.route("/course").post(authmiddleware_1.authAdmin, courseController_1.addCourse);
router
    .route("/courseadmin/:courseId")
    .delete(authmiddleware_1.authAdmin, courseController_1.deleteCourse)
    .patch(authmiddleware_1.authAdmin, courseController_1.updateCourse);
router.route("/course/:courseId").get(courseController_1.getCourse);
router.route("/admin/courses").get(authmiddleware_1.authAdmin, courseController_1.getAdminCourse);
router.route("/courses").get(courseController_1.getAllCourses);
router.route("/imageupload").post(courseController_1.uploadCourseImage);
exports.default = router;
