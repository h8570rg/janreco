import { FIRESTORE } from "@/constants";
import { User } from "@/types";
import { firestore } from "src/firebase/client";

export const fetchUser = async (uid: string) =>
  firestore.getDoc<User>(FIRESTORE.COLLECTION.USERS, uid);

export const createUser = async (user: User) => {
  // todo;
};