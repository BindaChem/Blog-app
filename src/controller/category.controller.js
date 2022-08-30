import { v4 } from "uuid";
import { con } from "../config/database.js";

export const createCategory = (req,res) => {
    const data = req.body;
    const id = v4();
    con.query("INSERT INTO category(id,name) VALUES (?,?)",[id,data.name],(err) => {
        console.log(err);
        if(err) 
        return res.status(500).send({message: "unable to create category"});
        return res.status(200).send({message: "Category created"})
    })
};