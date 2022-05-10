import {
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import { omit } from "lodash";
import { db } from "../../firebase";
import { fetchUser } from "../user";

const propertiesCollectionId = "properties";
const propertyDetailsCollectionId = "propertyDetails";
const usersCollectionId = "users";

export const getPropertiesByUserId = async (id: string) => {
  try {
    // Refs
    const propertiesRef = collection(db, propertiesCollectionId);

    // Snapshots
    const querySnapshot = await getDocs(
      query(propertiesRef, where("user", "==", id))
    );

    // Parsing data
    const data = querySnapshot.docs.map((item) => ({
      ...item.data(),
      id: item.id,
    })) as IPropertyDetails[];

    return Promise.resolve(data);
  } catch (e) {
    return Promise.reject(e);
  }
};

export const getPropertyDetails = async (id: string) => {
  try {
    // Refs
    const propertyRef = doc(db, propertiesCollectionId, id);
    const detailsRef = collection(db, propertyDetailsCollectionId);

    // Snapshots
    const propertyQuerySnapshot = await getDoc(propertyRef);
    const detailsQuerySnapshot = await getDocs(
      query(detailsRef, where("propertyId", "==", id))
    );

    // Parsing data
    const propertyData = propertyQuerySnapshot.data() as IPropertyDetails;
    const detailsData = detailsQuerySnapshot.empty
      ? {}
      : omit(detailsQuerySnapshot.docs[0].data(), "propertyId");
    const agentData = detailsData.agent
      ? ((await fetchUser(detailsData.agent)) as IUserData)
      : null;
    const tenantData = detailsData.tenant
      ? ((await fetchUser(detailsData.tenant)) as IUserData)
      : null;

    const data: IPropertyDetails = {
      id,
      ...detailsData,
      ...propertyData,
      agent: agentData,
      tenant: tenantData,
    };

    return Promise.resolve(data);
  } catch (e) {
    return Promise.reject(e);
  }
};
