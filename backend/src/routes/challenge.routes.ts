import { Router } from "express";
import { createChallenge, deleteChallenge, getallChallenges, getChallengesById, joinChallenge, leaveChallenge, updateChallenge, updateChallengeProgress, userChallenges } from "../controllers/challenge.controllers";
import { authenticate, authorize } from "../middleware/auth.middleares";

const router = Router();

router.post('/', authenticate, authorize('ADMIN','TRAINER'), createChallenge)
router.get('/', authenticate, getallChallenges)
router.get('/:id', authenticate, getChallengesById)
router.put('/:id', authenticate, authorize('ADMIN'), updateChallenge)
router.delete('/:id', authenticate, authorize('ADMIN'), deleteChallenge)
router.post('/:id/join', authenticate, joinChallenge)
router.delete('/:id/leave', authenticate, leaveChallenge)
router.patch('/:id/progress', authenticate, updateChallengeProgress)
router.get('/user', authenticate, userChallenges)

export default router;