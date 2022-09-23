import { UserCredential } from "firebase/auth";
import router from "next/router";
import { config } from "~/lib/config";
import { authTokenCookie, refreshTokenCookie } from "~/lib/cookie";
import {
  createAccountWithEmailAndPassword,
  signinWithGoogle,
  signOut as _signOut,
  subscribeAuthStateChanged as _subscribeAuthStateChanged,
  signinWithEmailAndPassword,
  signinAnonymously,
  getErrorDetail,
  sendPasswordResetEmail as _sendPasswordResetEmail,
  sendEmailVerification as _sendEmailVerification,
} from "~/lib/repositories/auth";

export const METHOD = {
  GOOGLE: "google",
  EMAIL: "email",
} as const;
export type Method = typeof METHOD[keyof typeof METHOD];

export const signup = {
  email: async (
    email: string,
    password: string
  ): Promise<
    | { success: true; userCredential: UserCredential }
    | { success: false; cause: "email" | "password" | "other"; message: string }
  > => {
    try {
      const userCredential = await createAccountWithEmailAndPassword(
        email,
        password
      );
      const authToken = await userCredential.user.getIdToken();
      authTokenCookie.client.set(authToken);
      return {
        success: true,
        userCredential,
      };
    } catch (e) {
      return {
        success: false,
        ...getErrorDetail(e),
      };
    }
  },
};

export const signin = {
  redirect: {
    google: signinWithGoogle,
  },
  email: async (
    email: string,
    password: string
  ): Promise<
    | { success: true; userCredential: UserCredential }
    | { success: false; cause: "email" | "password" | "other"; message: string }
  > => {
    try {
      const userCredential = await signinWithEmailAndPassword(email, password);
      const authToken = await userCredential.user.getIdToken();
      authTokenCookie.client.set(authToken);
      return {
        success: true,
        userCredential,
      };
    } catch (e) {
      return {
        success: false,
        ...getErrorDetail(e),
      };
    }
  },
  anonymous: signinAnonymously,
};

export const signOut = () => {
  _signOut();
  authTokenCookie.client.destory();
  refreshTokenCookie.client.destory();
  router.push("/signin");
};

export const subscribeAuthStateChanged = _subscribeAuthStateChanged;

export const sendPasswordResetEmail = async (
  email: string
): Promise<
  | { success: true }
  | { success: false; cause: "email" | "password" | "other"; message: string }
> => {
  try {
    await _sendPasswordResetEmail(email);
    return {
      success: true,
    };
  } catch (e) {
    return {
      success: false,
      ...getErrorDetail(e),
    };
  }
};

export const sendEmailVerification = () =>
  _sendEmailVerification({
    url: `${config.public.origin}/signup/email-verify/redirect`,
  });