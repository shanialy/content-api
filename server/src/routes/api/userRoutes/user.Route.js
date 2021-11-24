import express from "express"; 
import {
    register,
    verifyEmail,
    authenticate,
    revokeToken,
    forgotPassword,
    resetPassword
}from "../../../controllers/userControllers/user.Controller.js"
import authorize from "../../../middlewares/authorize.js"
const router =  express.Router();


router.post('/register', register);
router.post('/verify-email', verifyEmail);
router.post('/authenticate', authenticate);
router.post('/revoke-token', authorize(), revokeToken);
router.post('/forgot-password', forgotPassword);
router.post('/reset-password', resetPassword);



export default router