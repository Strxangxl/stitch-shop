import express from "express";
import Product from "../models/productModel.js";

const router = express.Router();

router.get("/", async (req, res) => {
  const products = await Product.find({});

  res.json(products);
});

router.get("/:id", async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (product) {
    res.json(product);
  } else {
    res.status(404)
    throw new Error('Product not found')
  }
});

export default router;
