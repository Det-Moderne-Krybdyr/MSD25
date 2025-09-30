import { Router } from "express";
import  "../services/authService"
import {
    GetUserFromEmailAndToken,
    postSignIn,
    PostSignOut,
    PostSignUp,
    PostValidate
} from "../controllers/authController";

const router = Router()

router.post("/signin", postSignIn)
router.post("/signout", PostSignOut)
router.post("/user", PostSignUp)
router.post("/validate", PostValidate)
router.post("/getUser", GetUserFromEmailAndToken)

export default router