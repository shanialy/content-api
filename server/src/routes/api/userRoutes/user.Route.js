import express from "express"; 
import {
    register,
    verifyEmail,
    authenticate
}from "../../../controllers/userControllers/user.Controller.js"
const router =  express.Router();


router.post('/register', register);
router.post('/verify-email', verifyEmail);
router.post('/authenticate', authenticate);



export default router