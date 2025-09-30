import axios from "axios";

const API_URL = process.env.EXPO_PUBLIC_API_URL + "/cars";

export const getReservationsByUser = async (email: string, token: string) => {
    const body = {
        email: email,
        token: token
    }

    let res = await axios.post(API_URL + '/reservations/by/user', body)
    return res.data
}