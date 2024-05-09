import express from 'express'
import { getUser, getUsers,updateUser,deleteUser } from '../controllers/user.controller.js';
import { vertoken } from '../middleware/verifytoken.js';

const router=express.Router();

router.get('/',getUsers);
router.get('/:id',vertoken,getUser);
router.put('/:id',vertoken,updateUser);
router.delete('/logout',vertoken,deleteUser);

export default router;