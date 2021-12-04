import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Auth from "./modules/Auth/Auth";
import MainPage from "./modules/MainPage/MainPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<MainPage />} />
        <Route path={"/auth"} element={<Auth />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
