import {NextFunction, Request, Response} from "express";
import {listUsers} from "../services/userServices";
import {getUserFromEmailAndToken, signIn, signOut, signUp, validateToken} from "../services/authService"

export async function PostSignUp(
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

export async function PostSignOut(
    _req: Request,
    res: Response,
    next: NextFunction
) {
    try {
        await signOut(_req.body.email, _req.body.token);
        res.json({});
    } catch (err) {
        next(err);
    }
}

export async function PostValidate(
    _req: Request,
    res: Response,
    next: NextFunction
) {
    try {
        const isValid = await validateToken(_req.body.email, _req.body.token);
        res.json(isValid);
    } catch (err) {
        next(err);
    }
}

export async function GetUserFromEmailAndToken(
    _req: Request,
    res: Response,
    next: NextFunction
) {
    try {
        const user = await getUserFromEmailAndToken(_req.body.email, _req.body.token);
        res.json(user);
    } catch (err) {
        next(err);
    }
}

