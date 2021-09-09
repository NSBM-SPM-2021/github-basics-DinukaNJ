import { getTutorials, insertTutorial } from "../models/tutorial.model.js";
  


export const showTutorials = (req, res) => {
    getTutorials((err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}

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