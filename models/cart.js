import mongoose from 'mongoose';

const cartSchema = new mongoose.Schema({
    customer: { type: mongoose.Schema.Types.ObjectId, ref: 'Customer' },
    items: [{ type: mongoose.Schema.Types.ObjectId, ref: 'CartItem' }]
});

const Cart = mongoose.model('Cart', cartSchema);
export default Cart;
