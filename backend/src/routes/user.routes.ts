import { Router } from "express";
import { authenticate, authorize } from "../middleware/auth.middleares";
import { getAllUsers ,getCurrentUser,getUserById,updateProfile,BodyMetrics,userMetrics,deleteUser} from "../controllers/user.controllers";


const router= Router()

router.get('/',authenticate,authorize('ADMIN','TRAINER'),getAllUsers)
router.get('/me',authenticate,getCurrentUser)
router.get('/:id',authenticate,authorize('ADMIN','TRAINER'),getUserById)
router.put('/profile',authenticate,updateProfile)
router.post('/metrics',authenticate,BodyMetrics)        
router.get('/:id/metrics',authenticate,authorize('ADMIN','TRAINER'),userMetrics)
router.delete('/:id',authenticate,authorize('ADMIN','TRAINER'),deleteUser)

export default router;