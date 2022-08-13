import mysql from "mysql";


export const con = mysql.createConnection({
  host: "localhost",
  user: "binda",
  password: "binda",
  database: "blog"
});

con.connect((err) => {
  if (err) throw ({message: "Not connected"})
  console.log("Connected!");
  
});





