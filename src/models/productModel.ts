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
    }
});

export default mongoose.model("Product", productSchema);