import { PropertieDataType } from "@/types/types";
import axios from "axios";
axios.defaults.withCredentials = true;

const apiUrl = process.env.NEXT_PUBLIC_API_URL;

export const getAllProperties = async () => {
  return await axios.get(`${apiUrl}/properties/all`);
};

export const newPropertie = async (propertieData: PropertieDataType) => {
  return await axios.post(`${apiUrl}/properties/new-propertie`, propertieData);
};
