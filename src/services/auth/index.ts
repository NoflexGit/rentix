import { signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "../../firebase";

/**
 * Method for user authentication with email and password
 * @param credentials - Email and password
 */
export const loginWithEmailAndPassword = async (credentials: ICredentials) => {
  try {
    const response = await signInWithEmailAndPassword(
      auth,
      credentials.email,
      credentials.password
    );
    return Promise.resolve(response);
  } catch (e) {
    return Promise.reject(e);
  }
};

export const logout = async () => {
  try {
    const response = await signOut(auth);
    return Promise.resolve(response);
  } catch (e) {
    return Promise.reject(e);
  }
};
