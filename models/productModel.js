import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  p_id: Number,
  p_name: String,
  p_price: Number,
  p_model: String,
  category: { type: mongoose.Schema.Types.ObjectId, ref: "Category" },
});

const Product = mongoose.model("Product", productSchema);
export default Product;
