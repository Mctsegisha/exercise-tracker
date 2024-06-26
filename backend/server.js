import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import morgan from "morgan";
import dotenv from "dotenv";
import colors from "colors";
import userRoutes from "./routes/users.js";
import exerciseRoutes from "./routes/exercises.js";
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

app.use('/exercises', exerciseRoutes);
app.use('/users', userRoutes);

app.listen(
    PORT,
    console.log(
        `Server is running on port: ${PORT}`
            .yellow.bold
    )
);