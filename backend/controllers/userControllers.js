import User from "../models/user.model.js";
import asyncHandler from "express-async-handler";


const getUser = asyncHandler(async (req, res) => {
    try {
        const user = await User.find()
        if (!user) {
            res.status(404)
            throw new Error('User not found')
        }
        res.json(user)
    } catch (error) {
        throw new Error(error)
    }
})


const addUser = asyncHandler(async (req, res) => {
    try {
        const username = req.body.username;

        const user = await User.create({
            username
        });

        if (user) {
            res.status(201).json({
                _id: user._id,
                name: user.username

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

export { getUser, addUser }