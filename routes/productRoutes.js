import express from "express";
import { createProduct, deleteProduct, getProduct } from "../controllers/productcontroller.js";


const router = express.Router();

router.post("/createProduct", createProduct);
router.get("/getProduct", getProduct);
// router.put("/:id", updateProduct);
router.delete("/:id", deleteProduct);

export default router;
