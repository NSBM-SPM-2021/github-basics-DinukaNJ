import { getTutorials } from "../models/tutorial.model.js";
  


export const showTutorials = (req, res) => {
    getTutorials((err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}