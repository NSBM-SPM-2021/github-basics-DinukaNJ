import express from "express";
import { showTutorials, createTutorial } from "../controllers/tutorial.controller.js";
  
const router = express.Router();

//routes
router.get('/', showTutorials);
router.post('/tutorials', createTutorial);
router.delete('/tutorials', deleteTutorials);

export default router;