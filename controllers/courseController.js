const getAllCourses = (req, res) => {
    res.send("Get All Courses");
}
const getCourse = (req, res) => {
    res.send("Get Course");
}
const updateCourse = (req, res) => {
    res.send("UpdateCourse");
}
const deleteCourse = (req, res) => {
    res.send("Delete Course");
}
const addCourse = (req, res) => {
    res.send("Add course");
}

module.exports = {
    addCourse, deleteCourse, updateCourse, getAllCourses, getCourse
}