import express from "express";
import { verifyToken } from "../utils/verifyUser.js";
import {
  addToCart,
  deleteCart,
  deleteCarts,
  getCarts,
  updateCart,
} from "../controllers/cart.controller.js";

const router = express.Router();

router.post("/:id", verifyToken, addToCart);
router.put("/:id", verifyToken, updateCart);
router.get("/", verifyToken, getCarts);
router.delete("/:id", verifyToken, deleteCart);
router.delete("/", verifyToken, deleteCarts);

export default router;
