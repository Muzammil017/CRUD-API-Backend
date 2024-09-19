import Cart from '../models/cart.js';

export const createCart = async (req, res) => {
    try {
        const { customer, items } = req.body;

        const cartExists = await Cart.findOne({ customer });
        if (cartExists) {
            return res.status(400).json({ message: "Cart already exists for this customer" });
        }

        const cartData = new Cart({ customer, items });
        await cartData.save();

        return res.status(201).json({ message: "Cart data saved successfully", success: true, data: cartData });
    } catch (error) {
        res.status(500).json(error.message);
    }
};

export const getCart = async (req, res) => {
    try {
        const getCarts = await Cart.find().populate('customer').populate('items');
        return res.status(200).json({ message: "Carts fetched successfully", success: true, data: getCarts });
    } catch (error) {
        return res.status(500).json(error.message);
    }
};

export const getCartById = async (req, res) => {
    try {
        const { cartId } = req.params;
        const getCart = await Cart.findById(cartId).populate('customer').populate('items');
        return res.status(200).json({ message: "Cart data fetched successfully", success: true, data: getCart });
    } catch (error) {
        return res.status(500).json(error.message);
    }
};

export const deleteCart = async (req, res) => {
    try {
        const { cartId } = req.params;
        const delCart = await Cart.findByIdAndDelete(cartId);
        return res.status(200).json({ message: "Cart deleted successfully", success: true, data: delCart });
    } catch (error) {
        return res.status(500).json(error.message);
    }
};
