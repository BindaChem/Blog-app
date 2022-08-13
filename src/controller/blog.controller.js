import {v4} from "uuid";
import {con} from "../config/database.js";


export const createBlog = (req, res) => {
    const data = req.body;
    const id = v4();
    db.query(
      "INSERT INTO blogs(id,title,img_url,descriptiont) VALUES (?,?,?,?)",
      [id, data.title,data.img_url,data.description],
      (err) => {
        console.log(err);
        if (err) return res.status (400).send({message: "Unable to do attendance"});
        return res.status(200).send({ message: "attendance done" });
      }
    );
  };
