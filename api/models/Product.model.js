import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User", // Assuming a User schema exists
    required: true,
  },
  rating: { type: Number, required: true, min: 1, max: 5 },
  comment: { type: String },
  createdAt: { type: Date, default: Date.now },
});

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    oldPrice: {
      type: Number,
    },
    sku: {
      type: String,
      required: true,
    },
    category: {
      type: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Category",
        },
      ],
      required: true,
    },
    images: {
      type: [String],
      required: true,
    },
    colors: {
      type: [String],
      required: true,
    },
    discount: {
      type: Number,
      default: 0,
    }, // Discount percentage (e.g., 50)
    measurements: {
      type: String, // Product dimensions
      required: true,
    },
    reviews: [reviewSchema], // Embedded sub-document for reviews
    additionalInfo: {
      details: { type: String }, // Additional details about the product
      packaging: {
        width: { type: String },
        height: { type: String },
        length: { type: String },
        weight: { type: String },
        packageCount: { type: Number },
      },
    },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

const Product = mongoose.model("Product", productSchema);

export default Product;
