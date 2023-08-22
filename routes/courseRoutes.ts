import express from "express";
const router = express.Router();
import {
  addCourse,
  deleteCourse,
  updateCourse,
  getAllCourses,
  getAdminCourse,
  getCourse,
  uploadCourseImage,
} from "../controllers/courseController";
import { authUser, authAdmin } from "../middleware/authmiddleware";

router.route("/course").post(authAdmin, addCourse);
router
  .route("/courseadmin/:courseId")
  .delete(authAdmin, deleteCourse)
  .patch(authAdmin, updateCourse);
router.route("/course/:courseId").get(getCourse);
router.route("/admin/courses").get(authAdmin, getAdminCourse);
router.route("/courses").get(getAllCourses);
router.route("/imageupload").post(uploadCourseImage);

export default router;
