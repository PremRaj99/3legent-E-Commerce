import Cart from "../models/Cart.model.js";
import OrderModel from "../models/Order.model.js";
import Product from "../models/Product.model.js";
import Transaction from "../models/Transaction.model.js";
import errorHandler from "../utils/error.js";
import responseHandler from "../utils/response.js";

// Create a new order
export const createOrders = async (req, res, next) => {
  try {
    const { street, country, city, state, pinCode } = req.body;
    const { paymentOption } = req.body;

    const cart = await Cart.findOne({ userId: req.user._id }).populate(
      "items.product"
    );

    if (!cart) {
      return next(errorHandler(400, "Product not found"));
    }

    const order = new OrderModel({
      userId: req.user._id,
      items: cart.items,
      totalAmount: cart.totalPrice,
      status: "Pending",
      street,
      country,
      city,
      state,
      pinCode,
    });

    const transaction = new Transaction({
      orderId: order._id,
      paymentOption: paymentOption,
      isCompleted: true,
    });

    order.transactionId = transaction._id;

    await Promise.all([order.save(), transaction.save()]);

    await Cart.findOneAndDelete({ userId: req.user._id });

    res.status(201).json(responseHandler(201, order, "Order created"));
  } catch (error) {
    next(error);
  }
};

export const createOrder = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { quantity } = req.body;
    const { street, country, city, state, pinCode } = req.body;
    const { paymentOption } = req.body;

    const product = await Product.findById(id);

    if (!product) {
      return next(errorHandler(400, "Product not found"));
    }

    const order = new OrderModel({
      userId: req.user._id,
      items: [
        {
          product: product._id,
          quantity: quantity || 1,
          price: product.price,
        },
      ],
      totalAmount: product.price * (quantity || 1),
      status: "Pending",
      street,
      country,
      city,
      state,
      pinCode,
    });

    const transaction = new Transaction({
      orderId: order._id,
      paymentOption: paymentOption,
      isCompleted: true,
    });

    order.transactionId = transaction._id;

    await Promise.all([order.save(), transaction.save()]);
    res.status(201).json(responseHandler(201, order, "Order created"));
  } catch (error) {
    next(error);
  }
};

// Get all orders
export const getAllOrders = async (req, res, next) => {
  try {
    let orders;

    if (req.user.role === "admin") {
      orders = await OrderModel.find();
    } else {
      orders = await OrderModel.find({ userId: req.user._id });
    }

    res.status(200).json(responseHandler(200, orders, "All orders"));
  } catch (error) {
    next(error);
  }
};

// Get order by ID
export const getOrderById = async (req, res, next) => {
  try {
    const order = await OrderModel.findById(req.params.id);

    if (!order) {
      return next(errorHandler(400, "Order not found"));
    }

    if (req.user.role !== "admin" && order.userId.toString() !== req.user._id) {
      return next(errorHandler(401, "Unauthorized"));
    }

    res.status(200).json(responseHandler(200, order, "Order"));
  } catch (error) {
    next(error);
  }
};

// Update order by ID
export const updateOrder = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { street, country, city, state, pinCode } = req.body;
    const { status } = req.body;

    const updatedOrder = await OrderModel.findById(id);
    if (!updatedOrder) {
      return next(errorHandler(400, "Order not found"));
    }

    if (req.user.role === "admin") {
      updatedOrder.status = status || updatedOrder.status;
    }
    if (req.user._id === updatedOrder.userId.toString()) {
      updatedOrder.street = street || updatedOrder.street;
      updatedOrder.country = country || updatedOrder.country;
      updatedOrder.city = city || updatedOrder.city;
      updatedOrder.state = state || updatedOrder.state;
      updatedOrder.pinCode = pinCode || updatedOrder.pinCode;
    }

    await updatedOrder.save();

    res.status(200).json(responseHandler(200, updatedOrder, "Order updated"));
  } catch (error) {
    next(error);
  }
};

// Delete order by ID
export const deleteOrder = async (req, res, next) => {
  try {
    const { id } = req.params;

    const deletedOrder = await OrderModel.findByIdAndDelete(id);
    if (!deletedOrder) {
      return next(errorHandler(400, "Order not found!"));
    }
    res.status(200).json(responseHandler(200, deletedOrder, "Order deleted"));
  } catch (error) {
    next(error);
  }
};
