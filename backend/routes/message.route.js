import express from 'express'
import { vertoken } from '../middleware/verifytoken.js';
import {addMessage} from '../controllers/message.controller.js'

const router=express.Router();

router.post('/:chatId',vertoken,addMessage);
export default router;