import {Router} from "express";
import {
    GetCarsByLocation,
    GetCurrentReservationsByUser, GetFutureReservationsByUser,
    GetLocations,
    GetPreviousReservationsByUser, PostReservation
} from "../controllers/carController";

const router = Router()

router.post("/reservations/by/user/previous", GetPreviousReservationsByUser)
router.post("/reservations/by/user/future", GetFutureReservationsByUser)
router.post("/reservations/by/user/current", GetCurrentReservationsByUser)
router.post("/locations", GetLocations)
router.post("/by/location", GetCarsByLocation)
router.post("/reservation", PostReservation)

export default router