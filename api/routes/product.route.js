import express from "express";
import { verifyAdmin, verifyToken } from "../utils/verifyUser.js";
import {
  createProduct,
  deleteProduct,
  getProduct,
  getSpecificProduct,
  updateProduct,
} from "../controllers/product.controller.js";

const router = express.Router();

// define all routes
router.post("/", verifyAdmin, createProduct);
router.get("/", getProduct);
router.get("/:id", getSpecificProduct);
router.put("/:id", verifyAdmin, updateProduct);
router.delete("/:id", verifyAdmin, deleteProduct);

export default router;
