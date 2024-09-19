import mongoose from 'mongoose';

const paymentSchema = new mongoose.Schema({
    payment_id: { type: Number, required: true },
    amount: { type: Number, required: true },
    payment_type: { type: String, required: true },
    customer: { type: mongoose.Schema.Types.ObjectId, ref: 'Customer' }
});

const Payment = mongoose.model('Payment', paymentSchema);
export default Payment;
