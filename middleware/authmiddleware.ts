import jwt, { JwtPayload } from "jsonwebtoken";
import { Request } from "express";
import { Response } from "express";
import { NextFunction } from "express";
const authUser = async (req: Request, res: Response, next: NextFunction) => {
  // check header
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith("Bearer")) {
    res.send("Token not in correct format");
  }
  if (authHeader) {
    const token = authHeader.split(" ")[1];
    try {
      const payload = jwt.verify(token, process.env.JWT_SECRET!);
      // attach the user to the job routes
      //req.user = { userId: payload.userId };
      req.headers["userId"] = (payload as JwtPayload).userId;
      next();
    } catch (error) {
      res.send(error);
    }
  }
};

const authAdmin = async (req: Request, res: Response, next: NextFunction) => {
  // check header
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith("Bearer")) {
    res.send("Token not in correct format");
  }

  if (authHeader) {
    const token = authHeader.split(" ")[1];
    try {
      const payload = jwt.verify(token, process.env.JWT_SECRET!);
      // attach the user to the job routes
      req.headers["userId"] = (payload as JwtPayload).userId;
      next();
    } catch (error) {
      res.send(error);
    }
  }
};

export { authUser, authAdmin };
