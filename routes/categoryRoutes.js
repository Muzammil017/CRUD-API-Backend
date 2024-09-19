import express from "express";
import {
  createCategory,
  getCategory,
 // updateCategory,
  delCategory,
} from "../controllers/categoryController.js";

const router = express.Router();

router.post("/createCategory", createCategory);
router.get("/:id", getCategory);
//router.put('/:id', updateCategory);
router.delete("/:id", delCategory);

export default router;
