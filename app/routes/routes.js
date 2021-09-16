import express from "express";
import { showTutorials, createProduct } from "../controllers/tutorial.controller.js";
  
const router = express.Router();

//routes
router.get('/', showTutorials);

router.post('/products', createProduct);



export default router;