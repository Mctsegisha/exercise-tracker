import express from "express";
import Exercise from "../models/exercise.model.js"

const router = express.Router();

router.route('/').get((req, res) => {

    Exercise.find()
        .then(exercise => res.json(exercise))
        .catch(err => res.status(400).json("Error:" + err))
});

router.route('/add').post((req, res) => {
    const Username = req.body.username;
    const Description = req.body.description;
    const Duration = Number(req.body.duration);
    const date = Date.parse(req.body.date);

    const newExercise = new Exercise({
        Username,
        Description,
        Duration,
        date
    });

    newExercise.save()
        .then(() => res.json('Exercise added!'))
        .catch(err => res.status(400).json("Error:" + err));
});

export default router