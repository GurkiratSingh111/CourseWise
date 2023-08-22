import Admin from "../models/AdminModel";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import User from "../models/UserModel";
import { Request } from "express";
import { Response } from "express";

interface adminType {
  name: String;
  email: String;
  role: String;
  _id: String;
}
const meRoute = async (req: Request, res: Response) => {
  const userId = req.headers["userId"];
  const user = await User.findOne({ _id: userId });
  if (!user) {
    const admin: adminType | null = await Admin.findOne({ _id: userId });
    if (!admin) {
      res.json("No user/admin exist");
    }
    const { name, email, role, _id } = admin as adminType;
    return res.json({ name, email, role, _id });
  }
  const { name, email, role, _id } = user;
  console.log(user);
  return res.json({ name, email, role, _id });
};

export { meRoute };
