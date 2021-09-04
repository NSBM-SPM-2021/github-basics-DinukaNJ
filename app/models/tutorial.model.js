import db from "../config/db.config.js";
  


export const insertTutorial = (data, result) => {
    db.query("INSERT INTO tutorials SET ?", [data], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}