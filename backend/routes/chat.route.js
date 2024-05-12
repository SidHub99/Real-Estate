import express from 'express'
import { vertoken } from '../middleware/verifytoken.js';
import { addChat, getchat, getchats, readChat } from '../controllers/chat.controller.js';
// import { getChats,getchat,addChat,readChat} from '../controllers/chat.controller.js'

const router=express.Router();

router.get('/',vertoken,getchats);
// router.get('/search/:id',vertoken,getUser);
router.get('/:id',vertoken,getchat);

router.post('/',vertoken,addChat);
router.put('/read/:id',vertoken,readChat);

export default router;