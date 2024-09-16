import express from "express";
import { signin, signout, signup } from "../controllers/auth.controller.js";
import { verifyToken } from "../utils/verifyUser.js";
import {
  createProduct,
  deleteProduct,
  getProduct,
  getSpecificProduct,
  updateProduct,
} from "../controllers/product.controller.js";

const router = express.Router();

// define all routes
router.post("/", verifyToken, createProduct);
router.get("/", getProduct);
router.get("/:id", getSpecificProduct);
router.put("/:id", verifyToken, updateProduct);
router.delete("/:id", verifyToken, deleteProduct);

export default router;
