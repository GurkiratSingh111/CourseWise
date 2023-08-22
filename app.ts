require("dotenv").config();
import "express-async-errors";
import express from "express";
import fileUpload from "express-fileupload";
import { v2 as cloudinary } from "cloudinary";

const app = express();
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET,
});
import adminAuthRouter from "./routes/adminAuthRoutes";
import userAuthRouter from "./routes/userAuthRoutes";
import courseRouter from "./routes/courseRoutes";
import meRouter from "./routes/meRoute";
import connectDB from "./db/connect";
import cors from "cors";

app.use(cors());
app.use(express.json());
app.use(fileUpload({ useTempFiles: true }));
app.use("/api/v1", adminAuthRouter);
app.use("/api/v1", userAuthRouter);
app.use("/api/v1", courseRouter);
app.use("/api/v1", meRouter);

const PORT = process.env.PORT || 4000;

const startServer = async () => {
  try {
    await connectDB(process.env.MONGO_URI!);
    console.log("Successfully connected to the database");
    app.listen(PORT, () => {
      console.log(`Server is listening on PORT ${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
};

startServer();
