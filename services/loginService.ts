const API_URL = process.env.EXPO_PUBLIC_API_URL;

export const userIsSignedIn = () => {
    return false
}

export const userIsSignedOut = () => {
    return !userIsSignedIn()
}