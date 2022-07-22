import express from "express";
import { check } from "express-validator";
import { login, register } from "../controllers/userController.js";

// Set up the router
const router = express.Router();

router.post("/login", login);
router.post("/register", register);

export const userRoutes = router;
