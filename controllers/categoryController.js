import Category from '../models/category.js';

export const createCategory = async (req, res) => {
    try {
        const { category_id, category_name } = req.body;

        const categoryExists = await Category.findOne({ category_id });
        if (categoryExists) {
            return res.status(400).json({ message: "Category already exists" });
        }

        const categoryData = new Category({ category_id, category_name });
        await categoryData.save();

        return res.status(201).json({ message: "Category saved successfully", success: true, data: categoryData });
    } catch (error) {
        res.status(500).json(error.message);
    }
};

export const getCategory = async (req, res) => {
    try {
        const getCategories = await Category.find();
        return res.status(200).json({ message: "Categories fetched successfully", success: true, data: getCategories });
    } catch (error) {
        return res.status(500).json(error.message);
    }
};

export const getCategoryById = async (req, res) => {
    try {
        const { categoryId } = req.params;
        const getCategory = await Category.findById(categoryId);
        return res.status(200).json({ message: "Category data fetched successfully", success: true, data: getCategory });
    } catch (error) {
        return res.status(500).json(error.message);
    }
};

export const delCategory = async (req, res) => {
    try {
        const { categoryId } = req.params;
        const delCategory = await Category.findByIdAndDelete(categoryId);
        return res.status(200).json({ message: "Category deleted successfully", success: true, data: delCategory });
    } catch (error) {
        return res.status(500).json(error.message);
    }
};
