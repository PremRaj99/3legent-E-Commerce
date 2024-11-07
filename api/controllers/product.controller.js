import Category from "../models/Category.model.js";
import Product from "../models/Product.model.js";
import errorHandler from "../utils/error.js";
import responseHandler from "../utils/response.js";

export const createProduct = async (req, res, next) => {
  try {
    const {
      name,
      discription,
      price,
      oldPrice,
      sku,
      categorySlug,
      images,
      colors,
      discount,
      measurements,
      additionalDetails,
      packageWidth,
      packageHeight,
      packageLength,
      packageCount,
    } = req.body;

    if (
      !name ||
      !discription ||
      !price ||
      !sku ||
      !categorySlug ||
      !images ||
      !colors ||
      !measurements
    ) {
      return next(errorHandler(400, "Please fill in all required fields"));
    }

    const product = await Product.create({
      name,
      discription,
      price,
      oldPrice,
      sku,
      category: categorySlug,
      images,
      colors,
      discount,
      measurements,
      additionalInfo: {
        details: additionalDetails,
        packaging: {
          width: packageWidth,
          height: packageHeight,
          length: packageLength,
          packageCount,
        },
      },
    });

    // find the category for array of category slugs and increment the number of products

    await Category.find({
      $in: { slug: categorySlug },
    }).updateMany({ $inc: { numberOfProducts: 1 } });

    res.status(201).json(responseHandler(201, product, "Product created"));
  } catch (error) {
    next(error);
  }
};
export const getProduct = async (req, res, next) => {
  try {
    const { name, categorySlug, limit, sort } = req.query;

    let query = {};
    if (categorySlug) {
      // Use regex for fuzzy search (case-insensitive)
      query.category = categorySlug;
    }
    if (name) {
      query.name = { $regex: name, $options: "i" };
    }

    const products = await Product.find(query)
      .limit(limit || 12)
      .sort(
        sort === "asc"
          ? { price: 1 }
          : sort === "desc"
          ? { price: -1 }
          : { createdAt: -1 }
      );

    if (!products) {
      return next(errorHandler(404, "Products not found"));
    }

    res.status(200).json(responseHandler(200, products, "Products found"));
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
    res.status(200).json(responseHandler(200, product, "Product found"));
  } catch (error) {
    next(error);
  }
};
export const updateProduct = async (req, res, next) => {
  try {
    const { id } = req.params;
    const {
      name,
      discription,
      price,
      oldPrice,
      sku,
      categorySlug,
      images,
      colors,
      discount,
      measurements,
      additionalDetails,
      packageWidth,
      packageHeight,
      packageLength,
      packageCount,
    } = req.body;

    if (!id) {
      return next(errorHandler(404, "Id not found"));
    }
    const updatedProduct = await Product.findByIdAndUpdate(
      id,
      {
        name,
        discription,
        price,
        oldPrice,
        sku,
        category: categorySlug,
        images,
        colors,
        discount,
        measurements,
        additionalInfo: {
          details: additionalDetails,
          packaging: {
            width: packageWidth,
            height: packageHeight,
            length: packageLength,
            packageCount,
          },
        },
      },
      {
        new: true,
      }
    );
    if (!updatedProduct) {
      return next(errorHandler(404, "Product not found"));
    }
    res
      .status(200)
      .json(responseHandler(200, updatedProduct, "Product updated"));
  } catch (error) {
    next(error);
  }
};
export const deleteProduct = async (req, res, next) => {
  try {
    const { id } = req.params;
    if (!id) {
      return next(errorHandler(404, "Id not found"));
    }
    const deletedProduct = await Product.findByIdAndDelete(id);

    if (!deletedProduct) {
      return next(errorHandler(404, "Product not found"));
    }

    await Category.find({
      $in: { slug: deletedProduct.category },
    }).updateMany({ $inc: { numberOfProducts: -1 } });

    res.status(200).json(responseHandler(200, deletedProduct, "Product deleted"));
  } catch (error) {
    next(error);
  }
};
