import Product from "../models/Product.model.js";

export const createProduct = async (req, res, next) => {
  try {
  } catch (error) {
    next(error);
  }
};
export const getProduct = async (req, res, next) => {
  try {
    const { category, limit, sort } = req.query;

    let query = {};
    if (category) {
      // Use regex for fuzzy search (case-insensitive)
      query.category = { $regex: category, $options: "i" };
    }

    const products = await Product.find(query).limit(limit || 12).sort({price: -1});
    res.status(200).json(products);
  } catch (error) {
    next(error);
  }
};
export const getSpecificProduct = async (req, res, next) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.status(200).json(product);
  } catch (error) {
    next(error);
  }
};
export const updateProduct = async (req, res, next) => {
  try {
  } catch (error) {
    next(error);
  }
};
export const deleteProduct = async (req, res, next) => {
  try {
    const { id } = req.params;
    if(!id) {
        return res.status(404).json({ message: "Id not found" });
    }
    const deletedProduct = await Product.findByIdAndDelete(id);

    if (!deletedProduct) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.status(200).json({ message: "Product deleted successfully" });
  } catch (error) {
    next(error);
  }
};
