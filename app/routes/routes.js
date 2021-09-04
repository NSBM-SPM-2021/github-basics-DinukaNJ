import express from "express";
  
import { createTutorial } from "../controllers/tutorial.controller.js";
  
const router = express.Router();

//routes

router.post('/addTutorial', createTutorial);

export default router;