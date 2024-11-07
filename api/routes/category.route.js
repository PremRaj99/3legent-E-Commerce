import express from 'express'
import { verifyAdmin } from '../utils/verifyUser.js';
import { createCategory, deleteCategory, getCategories, updateCategory } from '../controllers/category.controller.js';

const router = express.Router()

router.get("/", getCategories);
router.post("/", verifyAdmin, createCategory);
router.put("/:id", verifyAdmin, updateCategory);
router.delete("/:id", verifyAdmin, deleteCategory);

export default router