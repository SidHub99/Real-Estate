import express from 'express'
import { getNotification, getUsers,updateUser,deleteUser, savePost, profilePosts } from '../controllers/user.controller.js';
import { vertoken } from '../middleware/verifytoken.js';


const router=express.Router();

router.get('/',getUsers);
// router.get('/search/:id',vertoken,getUser);
router.put('/:id',vertoken,updateUser);
router.delete('/logout',vertoken,deleteUser);
router.post('/save',vertoken,savePost);
router.get('/profileposts',vertoken,profilePosts);
router.get('/notification',vertoken,getNotification);

export default router;