import {
  createUserWithEmailAndPassword,
  signInWithRedirect,
  GoogleAuthProvider,
  onAuthStateChanged,
  Unsubscribe,
  signOut as firebaseAuthSignOut,
  onIdTokenChanged,
} from "firebase/auth";
import { User } from "@types";
import { convertFirebaseAuthUserToUser } from "@utils/user";
import { auth } from "src/firebase/client";

type AuthError = {
  code: string;
  message: string;
  name: string;
};

export const isAuthError = (e: unknown): e is AuthError => {
  return e instanceof Error && "code" in e && "message" in e && "name" in e;
};

export const CREATE_ACCOUNT_WITH_EMAIL_AND_PASSWORD_ERROR_CODE = {
  EMAIL_EXISTS: "auth/email-already-in-use",
  INVALID_EMAIL: "auth/invalid-email",
  INVALID_PASSWORD: "auth/wrong-password",
  POPUP_BLOCKED: "auth/popup-blocked",
  USER_DELETED: "auth/user-not-found",
  USER_DISABLED: "auth/user-disabled",
  USER_MISMATCH: "auth/user-mismatch",
  WEAK_PASSWORD: "auth/weak-password",
} as const;

export const createAccountWithEmailAndPassword = async (
  email: string,
  password: string
) => createUserWithEmailAndPassword(auth, email, password);

/**
 * @see https://firebase.google.com/docs/auth/web/google-signin
 */
export const signInWithGoogle = async () => {
  const googleProvider = new GoogleAuthProvider();
  return signInWithRedirect(auth, googleProvider);
  // This gives you a Google Access Token. You can use it to access Google APIs.
  // const credential = GoogleAuthProvider.credentialFromResult(result);
  // const token = credential.accessToken;
};

export const signOut = () => firebaseAuthSignOut(auth);

export type AuthStateChangeHandler = (user: User | null) => void;

export const subscribeAuthStateChanged = (
  handler: AuthStateChangeHandler,
  error?: (error: Error) => void,
  complete?: () => void
): Unsubscribe =>
  onAuthStateChanged(
    auth,
    (firebaseAuthUser) => {
      const user =
        firebaseAuthUser && convertFirebaseAuthUserToUser(firebaseAuthUser);
      handler(user);
    },
    error,
    complete
  );

export type AuthTokenChangeHandler = (authToken: string | null) => void;

export const subscribeAuthTokenChanged = (
  handler: AuthTokenChangeHandler,
  error?: (error: Error) => void,
  complete?: () => void
) =>
  onIdTokenChanged(
    auth,
    async (firebaseAuthUser) => {
      const authToken =
        firebaseAuthUser && (await firebaseAuthUser.getIdToken());
      handler(authToken);
    },
    error,
    complete
  );
