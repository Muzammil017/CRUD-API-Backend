import mongoose from 'mongoose';

const cartItemSchema = new mongoose.Schema({
    product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
    quantity: { type: Number, required: true },
    total_cost: { type: Number, required: true }
});

const CartItem = mongoose.model('CartItem', cartItemSchema);
export default CartItem;
