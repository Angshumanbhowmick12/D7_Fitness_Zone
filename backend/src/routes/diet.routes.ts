import {Router} from "express";
import { createDiet, deitApprover, deleteDiet, getAlldiets, getDietsById, nutritionSummary, updateDietEntry  } from "../controllers/diet.controllers";
import { authenticate, authorize } from "../middleware/auth.middleares";

const router=Router();

router.post('/',authenticate,createDiet)
router.get('/',authenticate,getAlldiets)
router.get('/:id',authenticate,getDietsById)
router.put('/:id',authenticate,updateDietEntry)
router.delete('/:id',authenticate,deleteDiet)
router.patch('/approve/:id',authenticate,authorize('ADMIN','TRAINER'),deitApprover)
router.get('/stats/summary',authenticate,nutritionSummary)
