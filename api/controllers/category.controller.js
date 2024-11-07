import Category from "../models/Category.model.js";
import Product from "../models/Product.model.js";
import errorHandler from "../utils/error.js";
import responseHandler from "../utils/response.js";

export const getCategories = async (req, res, next) => {
  try {
    let query = {};
    if (req.query.category) {
      query = { name: { $regex: req.query.name, $options: "i" } };
    }
    const categories = await Category.find(query);
    res.status(200).json(responseHandler(200, categories, "All categories"));
  } catch (error) {
    next(error);
  }
};

export const createCategory = async (req, res, next) => {
  try {
    const { name, description } = req.body;

    if (!name) {
      return next(errorHandler(400, "Please fill in all required fields"));
    }

    const category = new Category({
      name,
      description,
    });

    await category.save();

    res.status(201).json(responseHandler(201, category, "Category created"));
  } catch (error) {
    next(error);
  }
};

export const updateCategory = async (req, res, next) => {
  try {
    const { name, description } = req.body;
    const { id } = req.params;
    let slug = name && name.toLowerCase().replace(/\s+/g, "-");

    if (!name || !description) {
      return next(errorHandler(400, "Please fill in all required fields"));
    }

    const category = await Category.findByIdAndUpdate(
      id,
      { name, description, slug },
      { new: true }
    );
    if (!category) {
      return next(errorHandler(404, "Category not found"));
    }

    res.status(200).json(responseHandler(200, category, "Category updated"));
  } catch (error) {
    next(error);
  }
};

export const deleteCategory = async (req, res, next) => {
  try {
    const { id } = req.params;

    const category = await Category.findByIdAndDelete(id);

    if (!category) {
      return next(errorHandler(404, "Category not found"));
    }

    await Product.find({ category: id }).updateMany({
      $pull: { category: id },
    });

    res.status(200).json(responseHandler(200, null, "Category deleted"));
  } catch (error) {
    next(error);
  }
};
