import {
  createUser,
  deleteUser,
  getUser,
  getUsers,
  updateUser,
} from "../controllers/userController";
import express from "express";

const router = express.Router();

router.post("/", createUser);
router.get("/", getUsers);
router.get("/:id", getUser);
router.delete("/:id", deleteUser);
router.put("/:id", updateUser);

export default router;
