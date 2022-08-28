import express from "express";
//import {con} from "./src/config/database.js";
import {router as postRouter} from "./src/routes/post.routes.js";


const app = express()//

app.use(express.json());
app.use('/post',postRouter);

app.listen(3301, () => {
    console.log("server is started on port 3301");

});















