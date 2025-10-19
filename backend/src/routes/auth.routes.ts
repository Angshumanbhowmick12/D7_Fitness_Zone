import { Router } from "express";
import { register } from "../controllers/auth.controllers";
import { login } from "../controllers/auth.controllers";
import { logout } from "../controllers/auth.controllers";
import { refreshAccessToken } from "../controllers/auth.controllers";
import { getUserSessions } from "../controllers/auth.controllers";

const router=Router()

router.post('/register',register)
router.post('/login ',login)
router.post('/logout',logout)
router.get('/refresh-token',refreshAccessToken)
router.get('/user-sessions',getUserSessions)


export default router