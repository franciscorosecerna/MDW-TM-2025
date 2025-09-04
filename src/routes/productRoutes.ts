import {
  createProduct,
  deleteProduct,
  getProduct,
  getProducts,
  updateProduct,
} from "../controllers/productController";
import express from "express";
import validationMiddleware from "../middlewares/middleware";
import { UpdateProductDto } from "../dto/update-product.dto";
import { CreateProductDto } from "../dto/create-product.dto";

const router = express.Router();

router.post("/",validationMiddleware(CreateProductDto) ,createProduct);
router.get("/", getProducts);
router.get("/:id", getProduct);
router.delete("/:id", deleteProduct);
router.put("/:id",validationMiddleware(UpdateProductDto) ,);

export default router;