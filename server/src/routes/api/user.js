import { getUsers, postUser, updateUser, deleteUser } from "../../controllers/userController.js"
import {postValidation, patchValidation} from "../validations/userValidation.js"
import express from "express";
const router = express.Router();

// route:  GET /api/user/
// desc:   reading users 
router.get("/", getUsers);


// route:  POST /api/user/
// desc:   creating user data
router.post("/", postValidation , postUser);



// route:  PATCH /api/user/:id
// desc:   updating user data
router.patch("/:id", patchValidation , updateUser);



// route:  DELETE /api/user/:id
// desc:   deleting user data
router.delete("/:id", deleteUser);


export default router;