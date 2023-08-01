const express = require('express');
const router = express.Router();
const { addCourse, deleteCourse, updateCourse, getAllCourses, getAdminCourse, getCourse } = require('../controllers/courseController');
const { authUser, authAdmin } = require('../middleware/authmiddleware');

router.route('/course').post(authAdmin, addCourse);
router.route('/courseadmin/:courseId').delete(authAdmin, deleteCourse).patch(authAdmin, updateCourse).get(authAdmin, getAdminCourse);
router.route('/course/:courseId').get(authUser, getCourse);
router.route('/courses').get(authUser, getAllCourses);

module.exports = router;