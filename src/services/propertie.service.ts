import axios from "axios";
axios.defaults.withCredentials = true;

const apiUrl = process.env.NEXT_PUBLIC_API_URL;

export const getAllProperties = async () => {
  return await axios.get(`${apiUrl}/properties/all`);
};
