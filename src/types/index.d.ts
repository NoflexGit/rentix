interface IUserData {
  firstName: string;
  lastName: string;
  image: string;
  id: string;
  email: string;
  role: "TENANT" | "LANDLORD" | "AGENT" | "MANAGER";
  phone?: string;
}

interface ICredentials {
  email: string;
  password: string;
}

interface IProperty {
  id: string;
  price: string;
  status: "OCCUPIED" | "FREE" | "REQUEST" | "MAINTENANCE";
  type: string;
  image: string;
  address: string;
  location: string;
  specifications: {
    rooms?: number;
    bathrooms?: number;
    area: number;
  };
  geo: google.maps.LatLngLiteral;
}

interface IPropertyDetails extends IProperty {
  description: string;
  gallery: string[];
  agent: IUserData;
  tenant: IUserData;
}
