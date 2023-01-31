import express from "express";
import { registerUser, loginUser, getUserProfile } from "../controllers/userControllers.js";
import { protect } from "../middleware/loginMiddleware.js";

const router = express.Router();

router.route("/").post(registerUser);
router.post("/login", loginUser)
router.route("/profile").get(protect, getUserProfile)

export default router;
