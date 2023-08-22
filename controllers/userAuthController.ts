import UserModel from "../models/UserModel";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import { Request, Response } from "express";

interface userType {
  _id: string;
  email: string;
  name: string;
  password: string;
}
const userSignup = async (req: Request, res: Response) => {
  const { email, name, password } = req.body;
  if (!email || !password || !name) {
    res.json("Missing credentials");
  }
  const existingUser = await UserModel.findOne({ email });
  if (existingUser) {
    res.status(404).json({ msg: "User already exists" });
  }
  const salt = await bcrypt.genSalt(10);
  const hashPassword = await bcrypt.hash(password, salt);
  const user = await UserModel.create({ email, name, password: hashPassword });
  const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET!, {
    expiresIn: process.env.JWT_LIFETIME,
  });
  res.status(201).json({
    user: {
      email: email,
      name: name,
      token,
    },
  });
};
const userLogin = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  if (!email || !password) {
    res.json("Missing credentials");
  }
  const user: userType | null = await UserModel.findOne({ email });
  if (!user) {
    res.status(404).json({ msg: "User not found" });
  }
  const isPasswordCorrect = await bcrypt.compare(
    password,
    (user as userType).password
  );
  if (!isPasswordCorrect) {
    res.json("Invalid Credentials");
  }
  const token = jwt.sign(
    { userId: (user as userType)._id },
    process.env.JWT_SECRET!,
    {
      expiresIn: process.env.JWT_LIFETIME,
    }
  );
  res.status(201).json({
    user: {
      email: (user as userType).email,
      name: (user as userType).name,
      token,
    },
  });
};

export { userSignup, userLogin };
