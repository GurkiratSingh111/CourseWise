require('dotenv').config();
require('express-async-errors');
const express = require('express');
const fileUpload = require('express-fileupload');
const cloudinary = require('cloudinary').v2


const app = express();
cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.CLOUD_API_KEY,
    api_secret: process.env.CLOUD_API_SECRET
})
const adminAuthRouter = require('./routes/adminAuthRoutes');
const userAuthRouter = require('./routes/userAuthRoutes');
const courseRouter = require('./routes/courseRoutes');
const meRouter = require('./routes/meRoute');
const connectDB = require('./db/connect');
const cors = require("cors");

app.use(cors())
app.use(express.json());
app.use(fileUpload({ useTempFiles: true }))
app.use('/api/v1', adminAuthRouter);
app.use('/api/v1', userAuthRouter);
app.use('/api/v1', courseRouter);
app.use('/api/v1', meRouter);

const PORT = process.env.PORT || 4000;

const startServer = async () => {
    try {
        await connectDB(process.env.MONGO_URI);
        console.log("Successfully connected to the database")
        app.listen(PORT, () => {
            console.log(`Server is listening on PORT ${PORT}`);
        })
    } catch (error) {
        console.log(error);
    }
}

startServer();
