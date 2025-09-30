import {string} from "yup";
import axios from "axios";
import * as React from "react";
import {getValueForAsync} from "../navigation/rootNavigator";

const API_URL = process.env.EXPO_PUBLIC_API_URL;

interface User {
    name: string,
    email: string,
    password: string,
}

interface User_Session {
    user_id: string,
    token: string,
}

export async function validateToken(email: string, token: string) {
    const body = {
        email: email,
        token: token,
    }
    let res = await axios.post(API_URL + "/auth/validate", body)
    return res.data;
}

export async function login(user: User) {
    console.log("serviceUser" + JSON.stringify(user));
    let res = await axios.post(API_URL + "/auth/signin", user)
    console.log("loginServiceResponse" + res.data)
    return res.data;
}

export async function signup(user: User) {
    console.log("serviceUser" + JSON.stringify(user));
    let res = await axios.post(API_URL+ "/auth/user", user)
    return res.data;
}

export async function signOut(email: string, token: string): Promise<void> {
    const body = {
        email: email,
        token: token,
    }
    await axios.post(API_URL + "/auth/signout", body)
}

export async function getUser() {
    const email = await getValueForAsync("email")
    const token = await getValueForAsync("user_token")
    const body = {
        email: email,
        token: token,
    }
    let res = await axios.post(API_URL + "/auth/get/user", body)
    return res.data
}

interface IAuthContext {
    signIn: (data: User) => Promise<void>;
    signOut: () => Promise<void>;
    signUp: (data: User) => Promise<void>;
}

export const SignInContext = React.createContext(false);
export const AuthContext = React.createContext<IAuthContext>({
    signIn: async (data: User) => {},
    signOut: async() => {},
    signUp: async (data: User) => {}})