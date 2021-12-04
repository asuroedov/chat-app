import axios from "axios";
import { AuthResponse } from "../types/auth";
import { errorHandler } from "../utils/errorHandler";

const BASE_URL = `http://localhost:5000/`;
const route = "auth/";

export async function login(email: string, password: string) {
  return await errorHandler<AuthResponse>(() => axios.post(`${BASE_URL}${route}login`, { email, password }));
}
