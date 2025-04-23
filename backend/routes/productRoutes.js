import express from 'express';
const router = express.Router();
import Product from '../models/Product.js'; // Import the Product model
// GET /api/products
router.get('/', async (req, res) => {
  const products = await Product.find();
  res.json(products);
});

// POST /api/products
router.post('/', async (req, res) => {
  const { name, price } = req.body;
  const newProduct = new Product({ name, price });
  await newProduct.save();
  res.status(201).json(newProduct);
});

export default router;
