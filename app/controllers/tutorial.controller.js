import { insertTutorial } from "../models/tutorial.model.js";
  

export const createTutorial = (req, res) => {
    const data = req.body;
    insertTutorial(data, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}