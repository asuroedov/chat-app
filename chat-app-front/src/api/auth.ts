import axios from "axios";
import { LoginResponse, ProfileResponse } from "../types/auth";
import { errorHandler } from "../utils/errorHandler";
import { config } from "../utils/config";

const BASE_URL = config.BASE_URL;
const route = "auth/";

export async function login(email: string, password: string) {
  return await errorHandler<LoginResponse>(() => axios.post(`${BASE_URL}${route}login`, { email, password }));
}

export async function profile(token: string) {
  return await errorHandler<ProfileResponse>(() => axios.get(`${BASE_URL}${route}profile`, { headers: { token } }));
}
