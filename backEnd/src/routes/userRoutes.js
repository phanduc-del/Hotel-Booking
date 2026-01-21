import express from "express";
import { protect } from "../middleware/authMiddleware.js";

import {
  createUser,
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser,
  getProfile,
  updateProfile,
} from "../controllers/userController.js";

const router = express.Router();

/**
 * 🔐 PROFILE (bắt buộc đăng nhập)
 */
router.get("/profile", protect, getProfile);
router.put("/profile", protect, updateProfile);

/**
 * 👤 CRUD USERS
 */
router.post("/", createUser);
router.get("/", getAllUsers);
router.get("/:id", getUserById);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);

export default router;
