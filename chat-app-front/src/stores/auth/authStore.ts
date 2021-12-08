import { makeAutoObservable } from "mobx";
import { login, profile } from "../../api/auth";

class AuthStore {
  userId: number | null = null;
  token = "";
  errorMessage = "";
  userName = "";

  constructor() {
    makeAutoObservable(this);
  }

  async login(email: string, password: string) {
    const [data, errorMessage] = await login(email, password);
    if (errorMessage) {
      this.errorMessage = errorMessage;
      return;
    }
    if (!data) return;

    this.errorMessage = "";
    this.userId = data.id;
    this.token = data.token;
    this.userName = data.userName;

    localStorage.setItem("token", data.token);
  }

  async profile(token: string) {
    const [data, errorMessage] = await profile(token);
    if (!data) return;

    this.userId = data.id;
    this.token = token;
    this.userName = data.userName;
  }
}

export default new AuthStore();
