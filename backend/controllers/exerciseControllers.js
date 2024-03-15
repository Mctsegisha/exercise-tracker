import Exercise from "../models/exercise.model.js";
import asyncHandler from "express-async-handler";


const getExercise = asyncHandler(async (req, res) => {
    try {
        const exercise = await Exercise.find()
        if (!exercise) {
            res.status(404)
            throw new Error('User not found')
        }
        res.json(exercise)

    } catch (error) {
        throw new Error(error)
    }
})


const addExercise = asyncHandler(async (req, res) => {
    try {
        const username = req.body.username;
        const description = req.body.description;
        const duration = req.body.duration;
        const date = req.body.date;


        const exercise = await Exercise.create({
            username,
            description,
            duration,
            date
        });

        if (exercise) {
            res.status(201).json({

                name: exercise.username,
                description: exercise.description,
                duration: exercise.duration,
                date: exercise.date




            });
        } else {
            res.status(400);
            throw new Error("Invalid Data")

        }

    }
    catch (error) {
        throw new Error(error)
    }
})

export { getExercise, addExercise }