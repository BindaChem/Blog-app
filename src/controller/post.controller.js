import { v4 } from "uuid";
import { con } from "../config/database.js";

export const createPost = (req, res) => {
  const data = req.body;
  const id = v4();
  con.query(
    "INSERT INTO post(id,author,date,title,text,userId,categoryId) VALUES (?,?,?,?,?,?,?)",
    [
      id,
      data.author,
      data.date,
      data.title,
      data.text,
      data.userId,
      data.categoryId,
    ],
    (err) => {
      console.log(err);
      if (err)
        return res.status(500).send({ message: "Unable to create post " });
      return res.status(200).send({ message: "Post created" });
    }
  );
};

export const readPost = (req, res) => {
  con.query("SELECT * FROM post", (err, results) => {
    console.log(results);
    if (err) return res.status(500).send({ message: "post not found" });
    return res.status(200).send(results);
  });
};

export const readPostId = (req, res) => {
  const id = req.params["postId"];
  con.query("SELECT * FROM post WHERE id=?", [id], (err, results) => {
    console.log(results);
    if (err) return res.status(400).send({ message: "Cannot read post" });
    return res.status(200).send(results);
  });
};


export const updatePostId = (req, res) => {
  const data = req.body;
  const id = req.params["postId"];
  console.log(id);

  con.query(
    "UPDATE post SET author =?,date =?,title =? ,text =? WHERE id =?",
    [data.author, data.date, data.title, data.text, id],
    (err, results) => {
      if (err) return res.status(500).send({message: "Unable to update"});
      return res.status(200).send({ message: "updated successfully" });
    }
  );
};


export const deletePostId = (req, res) => {
  const id = req.params["postId"];
  con.query("DELETE FROM post WHERE id= ?", [id], (err, results) => {
    console.log(results);
    if (err) return res.status(500).send({ message: "cannot delete post Id " });
    return res.status(200).send("Post deleete successfully");
  });
};
