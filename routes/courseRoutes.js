const express = require('express');
const router = express.Router();

router.route('/course').post(addCourse);
router.route('/course/:courseId').delete(deleteCourse).patch(updateCourse).get(getCourse);
router.route('/courses').get(getAllCourses);

module.exports = router;