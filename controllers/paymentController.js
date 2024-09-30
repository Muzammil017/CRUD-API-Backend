import Payment from '../models/paymentModel.js';

export const createPayment = async (req, res) => {
    try {
        const { payment_id, amount, payment_type
            //  customer
             } = req.body;

        const paymentExists = await Payment.findOne({ payment_id });
        if (paymentExists) {
            return res.status(400).json({ message: "Payment already exists" });
        }

        const paymentData = new Payment({ payment_id, amount, payment_type, 
            // customer
         });
        await paymentData.save();

        return res.status(201).json({ message: "Payment data saved successfully", success: true, data: paymentData });
    } catch (error) {
        res.status(500).json(error.message);
    }
};

export const getPayment = async (req, res) => {
    try {
        const getPayments = await Payment.find();
        return res.status(200).json({ message: "Payments fetched successfully", success: true, data: getPayments });
    } catch (error) {
        return res.status(500).json(error.message);
    }
};

export const getPaymentById = async (req, res) => {
    try {
        const { paymentId } = req.params;
        const getPayment = await Payment.findById(paymentId);
        return res.status(200).json({ message: "Payment data fetched successfully", success: true, data: getPayment });
    } catch (error) {
        return res.status(500).json(error.message);
    }
};

export const deletePayment = async (req, res) => {
    try {
        const { paymentId } = req.params;
        const delPayment = await Payment.findByIdAndDelete(paymentId);
        return res.status(200).json({ message: "Payment deleted successfully", success: true, data: delPayment });
    } catch (error) {
        return res.status(500).json(error.message);
    }
};
