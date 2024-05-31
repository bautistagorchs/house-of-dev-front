import { userLoginType } from "@/types/types";
import axios from "axios";
axios.defaults.withCredentials = true;

const apiUrl = process.env.NEXT_PUBLIC_API_URL;

export const loginService = async (user: userLoginType) => {
  return await axios.post(`${apiUrl}/users/login`, user);
};

export const logoutService = async () => {
  return await axios.post(`${apiUrl}/users/logout`);
};

export const authMeService = async () => {
  return await axios.get(`${apiUrl}/users/me`);
};
