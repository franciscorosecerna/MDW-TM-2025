import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        default: 0,
        min: 0
    },
    description: {
        type: String,
    },
    stock: {
        type: Number,
        default: 0,
        min: 0
    },
    category: {
        type: String,
        required: true,
        enum: ["electronics", "clothing", "books", "toys", "food", "other"],
        default: "other",
  }
});

export default mongoose.model("Product", productSchema);