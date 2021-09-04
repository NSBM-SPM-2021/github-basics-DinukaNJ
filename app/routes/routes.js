import express from "express";
  
import { showTutorials } from "../controllers/tutorial.controller.js";
  
const router = express.Router();

//routes


router.get('/', showTutorials);

export default router;