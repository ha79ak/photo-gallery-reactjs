import { fbAuth, fbCreateUserWithEmailAndPassword, fbSignInWithEmailAndPassword, fbUpdateCurrentUser } from "./config";

export const signUp = async (name, email, password) => {
    await fbCreateUserWithEmailAndPassword(fbAuth, email, password);
    await fbUpdateCurrentUser(fbAuth, { displayName: name });
}

export const signIn = async (email, password) => {
    await fbSignInWithEmailAndPassword(fbAuth, email, password);
}