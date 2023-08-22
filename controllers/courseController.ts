import Course from "../models/CourseModel";
import Admin from "../models/AdminModel";
import fs, { PathLike } from "fs";
import { Request } from "express";
import { Response } from "express";
import { v2 as cloudinary } from "cloudinary";
const getAllCourses = async (req: Request, res: Response) => {
  const courses = await Course.find({});
  res.json({ courses });
};
const getCourse = async (req: Request, res: Response) => {
  const courseId = req.params.courseId;
  const course = await Course.findOne({ _id: courseId });
  res.json({ course });
};
const updateCourse = async (req: Request, res: Response) => {
  const userId = req.headers["userId"];
  const courseId = req.params.courseId;
  const course = await Course.findOneAndUpdate(
    { _id: courseId, createdBy: userId },
    req.body,
    { new: true, runValidators: true }
  );
  res.status(200).json(course);
};
const deleteCourse = async (req: Request, res: Response) => {
  const userId = req.headers["userId"];
  const courseId = req.params.courseId;
  const course = await Course.findOneAndDelete({
    _id: courseId,
    createdBy: userId,
  });
  res.json({ course });
};
const addCourse = async (req: Request, res: Response) => {
  const userId = req.headers["userId"];
  req.body.createdBy = userId;
  const course = await Course.create(req.body);
  res.json({ course });
};
const getAdminCourse = async (req: Request, res: Response) => {
  const userId = req.headers["userId"];
  const courses = await Course.find({ createdBy: userId });
  res.json({ courses });
};
const uploadCourseImage = async (req: Request, res: Response) => {
  if (req.files) {
    console.log(JSON.stringify(req.files.image));
    const image = JSON.stringify(req.files.image);
    const result = await cloudinary.uploader.upload(
      //@ts-ignore
      req.files.image.tempFilePath,
      {
        use_filename: true,
        folder: "fileUpload",
      }
    );
    //console.log(result);
    //@ts-ignore
    fs.unlinkSync(req.files.image.tempFilePath); //delete the images stored in tmp folder
    //sending the file to cloudinary but not storing them locally
    res.status(201).json({ image: { src: result.secure_url } });
  }
};

export {
  addCourse,
  deleteCourse,
  updateCourse,
  getAllCourses,
  getCourse,
  getAdminCourse,
  uploadCourseImage,
};
