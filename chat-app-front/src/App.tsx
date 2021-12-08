import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Auth from "./modules/Auth/Auth";
import MainPage from "./modules/MainPage/MainPage";
import { observer } from "mobx-react-lite";
import authStore from "./stores/auth/authStore";
import { initializeSocket } from "./socket/socket";
import JoinChat from "./modules/JoinChat/JoinChat";

function App() {
  const { token } = authStore;

  useEffect(() => {
    const localToken = localStorage.getItem("token");
    if (!token && localToken) authStore.profile(localToken);
  }, [token]);

  useEffect(() => {
    if (token) initializeSocket(token);
  }, [token]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<MainPage />} />
        <Route path={"/auth"} element={<Auth />} />
        <Route path={"/join/*"} element={<JoinChat />} />
      </Routes>
    </BrowserRouter>
  );
}

export default observer(App);
