import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase";

/**
 * Gets user information
 * @param id - User ID
 */
export const fetchUser = async (id: string) => {
  try {
    const userSnapshot = await getDoc(doc(db, "users", id));
    const data = userSnapshot.data() as IUserData;
    return Promise.resolve({ ...data, id });
  } catch (e) {
    return Promise.reject(e);
  }
};
