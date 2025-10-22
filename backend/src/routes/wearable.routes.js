import {Router} from "express";
import { authenticate } from "../middleware/auth.middleares";
import { SyncWearableData,userWearbleData,wearableDataById,updateWearableData,deleteWearableData,getStatistics } from "../controllers/wearable.controllers";

const router=Router()

router.post('/sync',authenticate,SyncWearableData)
router.get('/user',authenticate,userWearbleData)
router.get('/:id',authenticate,wearableDataById)
router.put('/:id',authenticate,updateWearableData)
router.delete('/:id',authenticate,deleteWearableData)
router.get('/stats',authenticate,getStatistics)

export default router;

