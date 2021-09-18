import express from "express";
import { showTutorials, createTutorial } from "../controllers/tutorial.controller.js";
  
const router = express.Router();

//routes
router.get('/', showTutorials);

router.post('/products', createTutorial);

router.delete('/products', deleteTutorials);



export default router;