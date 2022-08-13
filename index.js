import express from "express";
//import {con} from "./src/config/database.js";
import {router as blogsRouter} from "./src/routes/blogs.routes.js";
import {validateBlog} from "./src/middleware/blogs.middleware.js";


const app = express()//

app.use(express.json());
app.use('/blogs',validateBlog,blogsRouter);

app.listen(3031, () => {
    console.log("server is started on port 3031");

});















