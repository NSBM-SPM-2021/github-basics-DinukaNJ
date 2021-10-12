import express from "express";
import { showTutorials, createTutorial, deleteTutorial } from "../controllers/tutorial.controller.js";
  
const router = express.Router();

//routes
router.get('/', showTutorials);
router.post('/tutorials', createTutorial);
router.delete('/tutorials/:id', deleteTutorial);

export default router;