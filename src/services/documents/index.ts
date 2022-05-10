import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../firebase";

/**
 * Gets a list of user documents
 * @param id - User ID
 */
export const getDocumentByUserId = async (id: string) => {
  try {
    const documentsRef = collection(db, "documents");
    const querySnapshot = await getDocs(
      query(documentsRef, where("users", "array-contains", id))
    );
    const data = querySnapshot.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));
    return Promise.resolve(data);
  } catch (e) {
    return Promise.reject(e);
  }
};
