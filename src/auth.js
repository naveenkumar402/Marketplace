import { auth } from './firebaseconfig';

export const signUp = async (email, password) => {
  await auth.createUserWithEmailAndPassword(email, password);
};

export const signIn = async (email, password) => {
  await auth.signInWithEmailAndPassword(email, password);
};

export const signOut = async () => {
  await auth.signOut();
};
