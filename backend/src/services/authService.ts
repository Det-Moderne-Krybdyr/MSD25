import {User, User_Session} from "@prisma/client";
import {prisma} from "../prisma/prisma";
import {compare, hash} from "bcryptjs";
import {randomUUID} from "node:crypto";

export async function signIn(user: User) {
    console.log("Signing in: " + JSON.stringify(user));
    const db_user = await prisma.user.findUnique({
        where: { email: user.email }
    });
    if (db_user == null) { return false }

    const match = (await compare(user.password, db_user.password))
    if (match) {
        return await createSession(db_user)
    }
    console.log("Wrong password")
    return false;
}

export async function validateToken(email: string, token: string) {
    let user = await prisma.user.findUnique({where: { email: email }});
    if (user == null) { return false }
    let sessions = await prisma.user_Session.findMany ({where: { user_id: user.id }})

    if (!sessions) return false
    for (let session of sessions) {
        if (await compare(token, session.token)) {
            return true
        }
    }
    return false
}

// sign out and delete session
export async function signOut(email: string, token: string) {
    const user = await prisma.user.findUnique({where: { email: email }});
    console.log("signing out: " + user)
    if (user == null) { return }
    const sessions = await prisma.user_Session.findMany({where: { user_id: user.id}});

    for (let session of sessions) {
        if (await compare(token, session.token)) {
            prisma.user_Session.delete({where: {id: session.id}});
        }
    }

    return
}

export async function signUp(user: User) {
    console.log("email: ", user.email)
    const db_user = await prisma.user.findUnique({where: { email: user.email }})
    if (db_user) {return false}

    let new_user = await prisma.user.create({data: {
            name: user.name,
            email: user.email,
            password: await hash(user.password, 10),
        }})
    return createSession(new_user)
}


async function createSession(user: User) {
    // generate session token
    let token = randomUUID().toString()
    let encryptedToken = await hash(token, 10)
    let session = {
        user_id: user.id,
        token: encryptedToken,
    }
    // store token
    await prisma.user_Session.create({data: session})
    return token
}

export async function getUserFromEmailAndToken(email: string, token: string) {
    let user = await prisma.user.findUnique({where: { email: email }});
    if (user == null) { return false }
    let sessions = await prisma.user_Session.findMany ({where: { user_id: user.id }})

    if (!sessions) return false
    for (let session of sessions) {
        if (await compare(token, session.token)) {
            return user
        }
    }
    return false
}