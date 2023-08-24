import AdminModel from "../models/AdminModel";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import { Request } from "express";
import { Response } from "express";

interface AdminData {
  _id: string;
  email: string;
  name: string;
  password: string;
}

export const adminSignup = async (req: Request, res: Response) => {
  const { email, name, password } = req.body;
  if (!email || !password || !name) {
    res.json("Missing credentials");
  }
  const existingAdmin = await AdminModel.findOne({ email });
  if (existingAdmin) {
    res.status(404).json({ msg: "Admin already exists" });
  }
  const salt = await bcrypt.genSalt(10);
  const hashPassword = await bcrypt.hash(password, salt);
  const admin = await AdminModel.create({
    email,
    name,
    password: hashPassword,
  });
  const token = jwt.sign({ userId: admin._id }, process.env.JWT_SECRET!, {
    expiresIn: process.env.JWT_LIFETIME,
  });
  res.status(201).json({
    admin: {
      email: email,
      name: name,
      token,
      _id: admin._id
    },
  });
};
export const adminLogin = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  if (!email || !password) {
    res.json("Missing credentials");
  }
  const admin: AdminData | null = await AdminModel.findOne({ email });
  if (!admin) {
    return res.status(404).json({ msg: "Admin not found" });
  }
  const isPasswordCorrect = await bcrypt.compare(password, admin.password);
  if (!isPasswordCorrect) {
    res.json("Invalid Credentials");
  }
  const token = jwt.sign({ userId: admin._id }, process.env.JWT_SECRET!, {
    expiresIn: process.env.JWT_LIFETIME,
  });
  res.status(201).json({
    admin: {
      email: admin.email,
      name: admin.name,
      token,
      _id: admin._id
    },
  });
};
