import { Router } from "express";
import  "../services/authService"
import {
    GetUserFromEmailAndToken,
    PostSignIn,
    PostSignOut,
    PostSignUp,
    PostValidate
} from "../controllers/authController";

const router = Router()

router.post("/signin", PostSignIn)
router.post("/signout", PostSignOut)
router.post("/user", PostSignUp)
router.post("/validate", PostValidate)
router.post("/get/user", GetUserFromEmailAndToken)

export default router