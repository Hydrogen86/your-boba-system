import "dotenv/config";

import express from "express";
import path from "path";
import cors from "cors";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";


import connectDB from "./config/db.js";


import authRoute from "./routes/authRoutes.js";
import menuRoute from "./routes/menuRoutes.js"

connectDB();


const app = express();

const PORT = process.env.PORT || 2500;

app.use(express.json());

app.use('/auth', authRoute);
app.use('/menu', menuRoute);


// Listen for successful connection
mongoose.connection.once("open", () => {
    console.log(`Connected to MongoDB database: ${mongoose.connection.name}`);

    app.listen(PORT, () => {
        console.log(`Server is listening on: http://localhost:${PORT}`);
    });
});

// Listen for connection errors
mongoose.connection.on("error", (err) => {
    console.error(err);
});