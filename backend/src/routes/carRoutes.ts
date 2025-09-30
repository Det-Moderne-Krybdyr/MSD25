import {Router} from "express";
import {GetCars, GetReservationsByUser} from "../controllers/carController";

const router = Router()

router.get("/", GetCars)
router.post("/reservations/by/user", GetReservationsByUser)

export default router