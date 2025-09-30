import {prisma} from "../prisma/prisma";
import {getUserInfoFromEmailAndToken} from "./authService";

export const listCars = async () => {
    return prisma.car.findMany({
        select: {
            id: true,
            model: true,
            current_location: true,
        }
    })
}

export const getReservationsByUser = async (email: string, token: string) => {
    const user = await getUserInfoFromEmailAndToken(email, token)
    if (!user) return
    return prisma.reservation.findMany({
        orderBy: [
            {
                end_date: 'desc',
            },
        ],
        include: {
            car: { include: {model: true}},
            pickup_location: true,
            dropoff_location: true,
            user: {select: {name: true, email: true}}},
        where: {user_id: user.id}})
}