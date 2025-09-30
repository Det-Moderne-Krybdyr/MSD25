import {NextFunction, Request, Response} from "express";
import {validateToken} from "../services/authService";
import {getReservationsByUser, listCars} from "../services/carService";

export async function GetCars(
    _req: Request,
    res: Response,
    next: NextFunction
) {
    try {
        const cars = await listCars();
        res.json(cars);
    } catch (err) {
        next(err);
    }
}

export async function GetReservationsByUser(
    _req: Request,
    res: Response,
    next: NextFunction
) {
    try {
        const reservations = await getReservationsByUser(_req.body.email, _req.body.token);
        res.json(reservations);
    } catch (err) {
        next(err);
    }
}