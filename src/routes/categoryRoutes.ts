import { createCategory, deleteCategory, getCategories, getCategory, updateCategory } from "../controllers/categoryController";
import express from "express";
const router = express.Router();

router.post("/", createCategory);
router.get("/", getCategories);
router.get("/:id", getCategory);
router.delete("/:id", deleteCategory);
router.put("/:id",updateCategory);

export default router;