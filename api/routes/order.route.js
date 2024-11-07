import express from "express";
import {
  createOrder,
  getAllOrders,
  getOrderById,
  updateOrder,
  deleteOrder,
  createOrders,
} from "../controllers/order.controller.js";
import { verifyAdmin, verifyToken } from "../utils/verifyUser.js";

const router = express.Router();

router.post("/", verifyToken, createOrders);
router.post("/:id", verifyToken, createOrder);
router.get("/", verifyToken, getAllOrders);
router.get("/:orderId", verifyToken, getOrderById);
router.put("/:orderId", verifyToken, updateOrder);
router.delete("/:orderId", verifyAdmin, deleteOrder);

export default router;
