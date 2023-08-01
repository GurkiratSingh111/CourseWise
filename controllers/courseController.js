const Course = require('../models/CourseModel');
const Admin = require('../models/AdminModel');

const getAllCourses = async (req, res) => {
    const courses = await Course.find({});
    res.json({ courses });
}
const getCourse = async (req, res) => {
    const courseId = req.params.courseId;
    const course = await Course.findOne({ _id: courseId });
    res.json({ course });
}
const updateCourse = async (req, res) => {
    const courseId = req.params.courseId;
    const course = await Course.findOneAndUpdate({ _id: courseId, createdBy: req.user.userId },
        req.body, { new: true, runValidators: true })
    res.status(200).json(course);
}
const deleteCourse = async (req, res) => {
    const courseId = req.params.courseId;
    const course = await Course.findOneAndDelete({ _id: courseId, createdBy: req.user.userId });
    res.json({ course });
}
const addCourse = async (req, res) => {
    req.body.createdBy = req.user.userId;
    const course = await Course.create(req.body);
    res.json({ course });
}
const getAdminCourse = async (req, res) => {
    const courses = await Course.find({ createdBy: req.user.userId })
    res.json({ courses });
}

module.exports = {
    addCourse, deleteCourse, updateCourse, getAllCourses, getCourse, getAdminCourse
}