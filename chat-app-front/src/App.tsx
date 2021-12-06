import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Auth from "./modules/Auth/Auth";
import MainPage from "./modules/MainPage/MainPage";
import { observer } from "mobx-react-lite";
import authStore from "./stores/auth/authStore";
import { initializeSocket } from "./socket/socket";

function App() {
  const { token } = authStore;

  useEffect(() => {
    if (token) initializeSocket(token);
  }, [token]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<MainPage />} />
        <Route path={"/auth"} element={<Auth />} />
      </Routes>
    </BrowserRouter>
  );
}

export default observer(App);
