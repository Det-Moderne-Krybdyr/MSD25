import axios from "axios";

const API_URL = process.env.EXPO_PUBLIC_API_URL + "/cars";

export const getPreviousReservationsByUser = async (email: string, token: string) => {
    const body = {
        email: email,
        token: token
    }

    let res = await axios.post(API_URL + '/reservations/by/user/previous', body)
    return res.data
}

export const getCurrentReservationsByUser = async (email: string, token: string) => {
    const body = {
        email: email,
        token: token
    }

    let res = await axios.post(API_URL + '/reservations/by/user/current', body)
    return res.data
}

export const getLocations = async (email: string, token: string) => {
    const body = {
        email: email,
        token: token
    }

    let res = await axios.post(API_URL + '/locations', body)
    return res.data
}

export const getCarsByLocationAndDates = async (email: string, token: string, locationId: string, startDate: Date, endDate: Date) => {
    const body = {
        email: email,
        token: token,
        location_id: locationId,
        start_date: startDate,
        end_date: endDate,
    }

    let res = await axios.post(API_URL + '/by/location', body)
    return res.data
}

export const postReservation = async (email: string, token: string, pickupLocationId: number, dropoffLocationId: number, carId: number, startDate: Date, endDate: Date) => {
    const body = {
        email: email,
        token: token,
        pickup_location_id: pickupLocationId,
        dropoff_location_id: dropoffLocationId,
        car_id: carId,
        start_date: startDate,
        end_date: endDate,
    }

    let res = await axios.post(API_URL + '/reservation', body)
    return res.data
}