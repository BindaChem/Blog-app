import {con} from "../config/database.js";


export const validateBlog = (req, res, next) => {
    const data = req.body;

    if (!data?.title || data?.img_url || !data?.description)
        return res.status(400).send({ message: "All fields are required" });
        return next();
    
};


