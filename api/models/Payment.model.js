import mongoose from "mongoose";

const cardDetailsSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    cardNumber: {
      type: String,
      required: true,
      unique: true,
      minlength: 16,
      maxlength: 16,
    },
    cardHolderName: {
      type: String,
      required: true,
    },
    expirationDate: {
      type: String,
      required: true,
    },
    cvv: {
      type: String,
      required: true,
      minlength: 3,
      maxlength: 4,
    },
  },
  {
    timestamps: true,
  }
);

const CardDetails = mongoose.model("CardDetails", cardDetailsSchema);

export default CardDetails;
