import {getValueForAsync} from "../navigation/rootNavigator";

export const sendWithAuth = async (serviceFunc: (...args: any)=>Promise<any>, ...args: any) => {
    const email = await getValueForAsync("email")
    const token = await getValueForAsync("user_token")

    return await serviceFunc(email, token, ...args)
}