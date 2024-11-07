import Cart from "../models/Cart.model.js";
import Product from "../models/Product.model.js";
import errorHandler from "../utils/error.js";
import responseHandler from "../utils/response.js";

export const addToCart = async (req, res, next) => {
  try {
    const { id } = req.params;

    const product = await Product.findById(id);

    if (!product) {
      next(errorHandler(404, "Product not found"));
    }

    let cart = await Cart.findOne({ userId: req.user._id });

    if (cart) {
      let itemIndex = cart.items.findIndex((p) => p.productId == id);

      if (itemIndex > -1) {
        let productItem = cart.items[itemIndex];
        productItem.quantity += 1;
        cart.items[itemIndex] = productItem;
      } else {
        cart.items.push({ productId: id, quantity: 1, price: product.price });
      }

      cart.totalPrice += product.price;
      cart = await cart.save();
    } else {
      const newCart = await Cart.create({
        userId: req.user._id,
        items: [{ productId: id, quantity: 1, price: product.price }],
        totalPrice: product.price,
      });

      cart = newCart;
    }

    return res
      .status(201)
      .json(responseHandler(201, cart, "Product added to cart"));
  } catch (error) {
    next(error);
  }
};

export const updateCart = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { quantity } = req.body;

    let cart = await Cart.findOne({ userId: req.user._id });

    if (cart) {
      let itemIndex = cart.items.findIndex((p) => p.productId == id);

      if (itemIndex > -1) {
        let productItem = cart.items[itemIndex];
        productItem.quantity = quantity;
        cart.items[itemIndex] = productItem;
      }

      cart.totalPrice = cart.items.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
      );

      cart = await cart.save();
    } else {
      return next(errorHandler(404, "Cart not found"));
    }

    return res
      .status(200)
      .json(responseHandler(200, cart, "Cart updated successfully"));
  } catch (error) {
    next(error);
  }
};

export const getCarts = async (req, res, next) => {
  try {
    let cart = await Cart.findOne({ userId: req.user._id }).populate(
      "items.productId"
    );
    if (!cart) {
      return next(errorHandler(404, "Cart not found"));
    }

    return res.status(200).json(responseHandler(200, cart, "Cart fetched"));
  } catch (error) {
    next(error);
  }
};

export const deleteCart = async (req, res, next) => {
  try {
    const { id } = req.params;

    let cart = await Cart.findOne({ userId: req.user._id });

    if (cart) {
      let itemIndex = cart.items.findIndex((p) => p.productId == id);

      if (itemIndex > -1) {
        let productItem = cart.items[itemIndex];
        cart.totalPrice -= productItem.price * productItem.quantity;
        cart.items = cart.items.filter((item) => item.productId != id);
        cart = await cart.save();
      }
    } else {
      return next(errorHandler(404, "Cart not found"));
    }

    return res
      .status(200)
      .json(responseHandler(200, cart, "Product removed from cart"));
  } catch (error) {
    next(error);
  }
};

export const deleteCarts = async (req, res, next) => {
  try {
    let cart = await Cart.findOne({ userId: req.user._id });

    if (cart) {
      cart.items = [];
      cart.totalPrice = 0;
      cart = await cart.save();
    } else {
      return next(errorHandler(404, "Cart not found"));
    }

    return res
      .status(200)
      .json(responseHandler(200, cart, "Cart cleared successfully"));
  } catch (error) {
    next(error);
  }
};
