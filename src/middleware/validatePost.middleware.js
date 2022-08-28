import { con } from "../config/database.js";

export const validatePost = (req, res, next) => {
  const data = req.body;

  if (!data?.author || !data?.date || !data?.title || !data?.text)
    return res.status(400).send({ message: "All fields are required" });
  return next();
};

