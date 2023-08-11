const express = require('express');
const router = express.Router();
const { addCourse, deleteCourse, updateCourse, getAllCourses, getAdminCourse, getCourse, uploadCourseImage } = require('../controllers/courseController');
const { authUser, authAdmin } = require('../middleware/authmiddleware');

router.route('/course').post(authAdmin, addCourse);
router.route('/courseadmin/:courseId').delete(authAdmin, deleteCourse).patch(authAdmin, updateCourse);
router.route('/course/:courseId').get(getCourse);
router.route('/admin/courses').get(authAdmin, getAdminCourse);
router.route('/courses').get(getAllCourses);
router.route('/imageupload').post(uploadCourseImage)

module.exports = router;