import {User, User_Session} from "@prisma/client";
import {prisma} from "../prisma/prisma";
import {compare} from "bcryptjs";
import {hash, randomUUID} from "node:crypto";

export async function signIn(user: User) {
    const db_user = await prisma.user.findUnique({
        where: { email: user.email }
    });
    if (!db_user) { return false }

    if (await compare(user.password, db_user.password)) {
        return await createSession(user)
    }
    return false;
}

export async function validateToken(session: User_Session) {
    let sessions = await prisma.user_Session.findMany ({where: { token: session.token }})

    if (!sessions) return false
    for (let _session of sessions) {
        if (await compare(session.token, _session.token)) {
            prisma.user.findUnique({where: { id: session.user_id }})
        }
    }
    return false
}

// sign out and delete session
export async function signOut(session: User_Session) {
    prisma.user_Session.delete({where: {id: session.id}})
    return
}

export async function signUp(user: User) {
    console.log("email: ", user.email)
    const db_user = await prisma.user.findUnique({where: { email: user.email }})
    if (db_user) {return false}

    let new_user = await prisma.user.create({data: {
            name: user.name,
            email: user.email,
            password: hash("sha256", user.password),
        }})
    return createSession(new_user)
}


async function createSession(user: User) {
    // generate session token
    let token = randomUUID().toString()
    let encryptedToken = hash("sha256", token)
    let session = {
        user_id: user.id,
        token: encryptedToken,
    }
    // store token
    await prisma.user_Session.create({data: session})

    return token
}

async function getUserFromSession(session: User_Session) {
    return ""
}