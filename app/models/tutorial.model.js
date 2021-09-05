import db from "../config/db.config.js";
  

export const getTutorials = (result) => {
    db.query("SELECT * FROM tutorials", (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}