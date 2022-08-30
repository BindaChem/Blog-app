import express from "express";
//import {con} from "./src/config/database.js";
import {router as postRouter} from "./src/routes/post.routes.js";
import {router as categoryRouter} from "./src/routes/category.routes.js";

const app = express()//

app.use(express.json());
app.use('/post',postRouter);
app.use('/category',categoryRouter);

app.listen(3301, () => {
    console.log("server is started on port 3301");

});















