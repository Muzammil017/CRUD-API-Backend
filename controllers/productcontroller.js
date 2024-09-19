import Product from "../models/productModel.js";

export const createProduct = async (req, res) => {
  try {
    const { p_id, p_name, p_price, p_model, category } = req.body;


    const productExists = await Product.findOne({ p_id });
    if (productExists) {
      return res.status(400).json({ message: "Product already exists" });
    }

    const productData = new Product({
      p_id,
      p_name,
      p_price,
      p_model,
      category
    });
    await productData.save();

    return res
      .status(201)
      .json({
        message: "Product saved successfully",
        success: true,
        data: productData,
      });
  } catch (error) {
    res.status(500).json(error.message);
  }
};

export const getProduct = async (req, res) => {
  try {
    const getProducts = await Product.find().populate("category");
    return res
      .status(200)
      .json({
        message: "Products fetched successfully",
        success: true,
        data: getProducts,
      });
  } catch (error) {
    return res.status(500).json(error.message);
  }
};

export const getProductById = async (req, res) => {
  try {
    const { productId } = req.params;
    const getProduct = await Product.findById(productId).populate("category");
    return res
      .status(200)
      .json({
        message: "Product data fetched successfully",
        success: true,
        data: getProduct,
      });
  } catch (error) {
    return res.status(500).json(error.message);
  }
};

export const deleteProduct = async (req, res) => {
  try {
    const { productId } = req.params;
    const delProduct = await Product.findByIdAndDelete(productId);
    return res
      .status(200)
      .json({
        message: "Product deleted successfully",
        success: true,
        data: delProduct,
      });
  } catch (error) {
    return res.status(500).json(error.message);
  }
};
