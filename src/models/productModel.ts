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
    Description: {
        type: String,
        require: false
    }
});

export default mongoose.model("Product", productSchema);