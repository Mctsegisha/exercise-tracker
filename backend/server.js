import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import morgan from "morgan";
import dotenv from "dotenv";
import colors from "colors";
import connectDB from "./config/database.js";


dotenv.config();
connectDB();
const app = express();
if (process.env.NODE_ENV === "development") {
    app.use(morgan("dev"));
}
const PORT = process.env.PORT || 5000;


app.use(cors());
app.use(express.json());

const exerciseRouter = require('./routes/exercises');
const usersRouter = require('./routes/users');

app.use('/execises', exerciseRouter);
app.use('/users', usersRouter);



app.listen(
    PORT,
    console.log(
        `Server is running on port: ${PORT}`
            .yellow.bold
    )
);