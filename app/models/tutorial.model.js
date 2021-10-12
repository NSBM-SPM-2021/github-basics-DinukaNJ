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

export const deleteTutorialById = (id, result) => {
    db.query("DELETE FROM tutorials WHERE id = ?", [id], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}