import { Router } from "express";
import { createMemberShip, getAllMemberships, usersMemberShips, getMemberShipsById, updateMemberShip, deleteMemberShip, getMembershipStats, getMembersByMembershipType, updateMembershipStatus, getExpiringMemberships } from "../controllers/membership.controllers";
import { authenticate, authorize } from "../middleware/auth.middleares";


const router= Router();

router.post('/',authenticate,authorize("ADMIN","TRAINER"),createMemberShip)
router.get('/allmemberships',authenticate,authorize("ADMIN","TRAINER"),getAllMemberships)
router.get('/my-memberships',authenticate,usersMemberShips)
router.get('/:id',authenticate,authorize("ADMIN","TRAINER"),getMemberShipsById)
router.put('/:id',authenticate,authorize("ADMIN","TRAINER"),updateMemberShip)
router.delete('/:id',authenticate,authorize("ADMIN","TRAINER"),deleteMemberShip)

// New admin routes for membership analytics and management
router.get('/admin/stats',authenticate,authorize("ADMIN"),getMembershipStats)
router.get('/admin/type/:membershipType',authenticate,authorize("ADMIN"),getMembersByMembershipType)
router.put('/admin/:id/status',authenticate,authorize("ADMIN"),updateMembershipStatus)
router.get('/admin/expiring',authenticate,authorize("ADMIN"),getExpiringMemberships)

export default router;