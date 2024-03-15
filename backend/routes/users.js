import express from "express";
import { getUser, addUser } from "../controllers/userControllers.js"

const router = express.Router();

router.route('/').get(getUser);

router.route('/add').post(addUser);

export default router;