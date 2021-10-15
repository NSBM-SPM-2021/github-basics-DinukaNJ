import mysql from "mysql2";
   
const db = mysql.createConnection({
  host: 'us-cdbr-east-04.cleardb.com',
  user: 'b9df1c33fabef7',
  password: '799e9eb7',
  database: 'heroku_f84aba608bed187'
});
  
export default db;