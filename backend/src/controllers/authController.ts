import {NextFunction, Request, Response} from "express";
import {listUsers} from "../services/userServices";
import {signIn, signOut, signUp, validateToken} from "../services/authService"

export async function postSignUp(
    _req: Request,
    res: Response,
    next: NextFunction
) {
    try {
        const token = await signUp(_req.body);
        res.json(token);
    } catch (err) {
        next(err);
    }
}

export async function postSignIn(
    _req: Request,
    res: Response,
    next: NextFunction
) {
    try {
        const token = await signIn(_req.body);
        res.json(token);
    } catch (err) {
        next(err);
    }
}

export async function postSignOut(
    _req: Request,
    res: Response,
    next: NextFunction
) {
    try {
        await signOut(_req.body);
        res.json({});
    } catch (err) {
        next(err);
    }
}

export async function postValidate(
    _req: Request,
    res: Response,
    next: NextFunction
) {
    try {
        const isValid = await validateToken(_req.body);
        res.json(isValid);
    } catch (err) {
        next(err);
    }
}

