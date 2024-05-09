import express from 'express'
import { shouldadmin, shouldlogged } from '../controllers/test.controller.js';
import  {vertoken}  from '../middleware/verifytoken.js';
const router=express.Router();

router.post('/should-be-logged-in',vertoken,shouldlogged);
router.post('/should-be-admin',shouldadmin);


export default router;