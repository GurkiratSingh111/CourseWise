"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.uploadCourseImage = exports.getAdminCourse = exports.getCourse = exports.getAllCourses = exports.updateCourse = exports.deleteCourse = exports.addCourse = void 0;
const CourseModel_1 = __importDefault(require("../models/CourseModel"));
const fs_1 = __importDefault(require("fs"));
const cloudinary_1 = require("cloudinary");
const getAllCourses = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const courses = yield CourseModel_1.default.find({});
    res.json({ courses });
});
exports.getAllCourses = getAllCourses;
const getCourse = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const courseId = req.params.courseId;
    const course = yield CourseModel_1.default.findOne({ _id: courseId });
    res.json({ course });
});
exports.getCourse = getCourse;
const updateCourse = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const userId = req.headers["userId"];
    const courseId = req.params.courseId;
    const course = yield CourseModel_1.default.findOneAndUpdate({ _id: courseId, createdBy: userId }, req.body, { new: true, runValidators: true });
    res.status(200).json(course);
});
exports.updateCourse = updateCourse;
const deleteCourse = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const userId = req.headers["userId"];
    const courseId = req.params.courseId;
    const course = yield CourseModel_1.default.findOneAndDelete({
        _id: courseId,
        createdBy: userId,
    });
    res.json({ course });
});
exports.deleteCourse = deleteCourse;
const addCourse = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const userId = req.headers["userId"];
    req.body.createdBy = userId;
    const course = yield CourseModel_1.default.create(req.body);
    res.json({ course });
});
exports.addCourse = addCourse;
const getAdminCourse = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const userId = req.headers["userId"];
    const courses = yield CourseModel_1.default.find({ createdBy: userId });
    res.json({ courses });
});
exports.getAdminCourse = getAdminCourse;
const uploadCourseImage = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    if (req.files) {
        console.log(JSON.stringify(req.files.image));
        const image = JSON.stringify(req.files.image);
        const result = yield cloudinary_1.v2.uploader.upload(
        //@ts-ignore
        req.files.image.tempFilePath, {
            use_filename: true,
            folder: "fileUpload",
        });
        //console.log(result);
        //@ts-ignore
        fs_1.default.unlinkSync(req.files.image.tempFilePath); //delete the images stored in tmp folder
        //sending the file to cloudinary but not storing them locally
        res.status(201).json({ image: { src: result.secure_url } });
    }
});
exports.uploadCourseImage = uploadCourseImage;
