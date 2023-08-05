require('dotenv').config();
require('express-async-errors');
const express = require('express');

const app = express();
const adminAuthRouter = require('./routes/adminAuthRoutes');
const userAuthRouter = require('./routes/userAuthRoutes');
const courseRouter = require('./routes/courseRoutes');
const connectDB = require('./db/connect');
const cors = require("cors");

app.use(cors())
app.use(express.json());
app.use('/api/v1', adminAuthRouter);
app.use('/api/v1', userAuthRouter);
app.use('/api/v1', courseRouter);

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
