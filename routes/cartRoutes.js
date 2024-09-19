import express from 'express';
import { createCart, getCart, 
    //  updateCart,
     deleteCart } from '../controllers/cartController.js';

const router = express.Router();

router.post('/createCart', createCart);
router.get('/getCart', getCart);
// router.put('/:id', updateCart);
router.delete('/deleteCart', deleteCart);

export default router;
