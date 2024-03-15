import express from "express";
import { getExercise, addExercise } from "../controllers/exerciseControllers.js"
const router = express.Router();

router.route('/').get(getExercise);

router.route('/add').post(addExercise);

export default router