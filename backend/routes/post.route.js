import express from 'express'

import  {vertoken}  from '../middleware/verifytoken.js';
import { addPosts,deletePosts, getPost, getPosts, updatePosts } from '../controllers/post.controller.js';
const router=express.Router();

router.get('/',getPosts);
router.get('/:id',getPost);
router.put('/:id',vertoken,updatePosts);
router.delete('/:id',vertoken,deletePosts);
router.post('/',vertoken,addPosts);



export default router;