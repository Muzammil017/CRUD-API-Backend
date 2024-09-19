import express from 'express';
import { createPayment, getPayment,
    //  updatePayment,
      deletePayment } from '../controllers/paymentController.js';

const router = express.Router();

router.post('/createPayment', createPayment);
router.get('/getPayment', getPayment);
// router.put('/:id', updatePayment);
router.delete('/deletePayment', deletePayment);

export default router;
