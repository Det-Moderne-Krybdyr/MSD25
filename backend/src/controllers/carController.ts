import {NextFunction, Request, Response} from "express";
import {validateToken} from "../services/authService";
import {
    getCarsByLocationAndDates,
    getCurrentReservationsByUser, getFutureReservationsByUser,
    getLocations,
    getPreviousReservationsByUser,
    listCars, postReservation
} from "../services/carService";

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

export async function GetPreviousReservationsByUser(
    _req: Request,
    res: Response,
    next: NextFunction
) {
    try {
        const reservations = await getPreviousReservationsByUser(_req.body.email, _req.body.token);
        res.json(reservations);
    } catch (err) {
        next(err);
    }
}

export async function GetFutureReservationsByUser(
    _req: Request,
    res: Response,
    next: NextFunction
) {
    try {
        const reservations = await getFutureReservationsByUser(_req.body.email, _req.body.token);
        res.json(reservations);
    } catch (err) {
        next(err);
    }
}

export async function GetCurrentReservationsByUser(
    _req: Request,
    res: Response,
    next: NextFunction
) {
    try {
        const reservations = await getCurrentReservationsByUser(_req.body.email, _req.body.token);
        res.json(reservations);
    } catch (err) {
        next(err);
    }
}

export async function GetLocations(
    _req: Request,
    res: Response,
    next: NextFunction
) {
    try {
        const locations = await getLocations(_req.body.email, _req.body.token);
        res.json(locations);
    } catch (err) {
        next(err);
    }
}

export async function GetCarsByLocation(
    _req: Request,
    res: Response,
    next: NextFunction
) {
    try {
        const cars = await getCarsByLocationAndDates(_req.body.email, _req.body.token, _req.body.location_id, _req.body.start_date, _req.body.end_date);
        res.json(cars);
    } catch (err) {
        next(err);
    }
}

export async function PostReservation(
    _req: Request,
    res: Response,
    next: NextFunction
) {
    try {
        const response = await postReservation(_req.body.email, _req.body.token, _req.body.car_id, _req.body.pickup_location_id, _req.body.dropoff_location_id, _req.body.start_date, _req.body.end_date);
        res.json(response);
    } catch (err) {
        next(err);
    }
}