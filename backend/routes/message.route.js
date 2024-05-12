import express from 'express'
import { vertoken } from '../middleware/verifytoken.js';
import {addMessage} from '../controllers/message.controller.js'

const router=express.Router();

router.post('/',vertoken,addMessage);
export default router;