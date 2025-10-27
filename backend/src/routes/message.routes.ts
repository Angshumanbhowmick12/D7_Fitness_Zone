import {Router} from "express";
import { authenticate } from "../middleware/auth.middleares";
import { deleteMessage, getConversation, markAsRead, sendMessage, SepecificUserMessage, unreadMessageCount } from "../controllers/message.controllers";

const router=Router();

router.post('/',authenticate,sendMessage)
router.get('/conversation',authenticate,getConversation)
router.get('/conversation/:userId',authenticate,SepecificUserMessage) 
router.patch('/mark-as-read/:userId',authenticate,markAsRead)  
router.get('/unread-count',authenticate,unreadMessageCount)
router.delete('/:id',authenticate,deleteMessage)   

export default router;