import {Router} from "express";
import {createBlog} from "../controller/blog.controller.js";


export const router = Router();

router.get('/');
router.post('/',createBlog);
router.put('/');
router.delete('/');