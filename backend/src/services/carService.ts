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

export const getPreviousReservationsByUser = async (email: string, token: string) => {
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
        where: {
            user_id: user.id,
            end_date: {lte: new Date()}
        }})
}

export const getCurrentReservationsByUser = async (email: string, token: string) => {
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
        where: {
            user_id: user.id,
            // end date is in the future
            end_date: {gte: new Date()}
        }
    })
}

export const getLocations = async (email: string, token: string) => {
    if (!await getUserInfoFromEmailAndToken(email, token)) return
    return prisma.location.findMany({
        select: {
            id: true,
            name: true,
        }
    })
}

export const getCarsByLocationAndDates = async (email: string, token: string, locationId: number, startDate: Date, endDate: Date) => {
    if (!await getUserInfoFromEmailAndToken(email, token)) return

    return prisma.car_Model.findMany ({
        include: {
            cars: {
                where: {
                    current_location_id: locationId,
                    // exclude cars that have an overlapping reservation
                    reservations: {
                        none: {
                            OR: [
                                {AND: [{end_date: {gte: startDate}}, {start_date: {lte: startDate}}]},
                                {AND: [{start_date: {gte: startDate}}, {end_date: {lte: endDate}}]},
                                {AND: [{start_date: {lte: endDate}}, {end_date: {gte: endDate}}]},
                            ]
                        }
                    }
                }},
        }
    })
}

export const postReservation = async (email: string, token: string, carId: number, pickupLocationId: number, dropoffLocationId: number, startDate: string, endDate: string) => {
    const user = await getUserInfoFromEmailAndToken(email, token)
    if (!user) return

    // calculate price
    const car = await prisma.car.findUnique({
        where: {id: carId},
        include: {
            model: true
        }
    })

    if (!car) return

    const days = (new Date(endDate).getTime() - new Date(startDate).getTime()) / (1000 * 60 * 60 * 24)
    const price = car.model.price.toNumber() * days;

    await prisma.reservation.create({
        data: {
            user_id: user.id,
            car_id: carId,
            pickup_location_id: pickupLocationId,
            dropoff_location_id: dropoffLocationId,
            start_date: new Date(startDate),
            end_date: new Date(endDate),
            price: price
        }
    })

    // update car location
    await prisma.car.update({
        where: {id: carId},
        data: {
            current_location_id: dropoffLocationId,
        }
    })

    return "success"
}