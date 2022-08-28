import {Router} from "express";
import {validatePost} from "../middleware/validatePost.middleware.js"
import {createPost,readPost,readPostId,updatePostId,deletePostId} from "../controller/post.controller.js";


export const router = Router();

router.get('/',readPost);
router.get('/:postId',readPostId)
router.post('/',validatePost,createPost);
router.put('/:postId',updatePostId);
router.delete('/:postId',deletePostId);