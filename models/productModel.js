import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  p_id: {
    type: Number,
    required: true
},
  p_name: {
    type: String,
    required: true
},
  p_price: {
    type: Number,
    required: true
},
  p_model: {
    type: String,
    required: true
},
  category: { type: mongoose.Schema.Types.ObjectId, ref: "Category" },
});

const product = mongoose.model("Product", productSchema);
export default product;
