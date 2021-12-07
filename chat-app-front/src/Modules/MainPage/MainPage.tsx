import React from "react";
import { observer } from "mobx-react-lite";
import { Navigate } from "react-router-dom";

import ChatList from "../ChatList/ChatList";
import ChatArea from "../ChatArea/ChatArea";

import authStore from "../../stores/auth/authStore";

import styles from "./styles.module.scss";

const MainPage = () => {
  const { token } = authStore;
  if (!token) return <Navigate to={"/auth"} />;

  return (
    <div className={styles.wrapper}>
      <ChatList />
      <ChatArea />
    </div>
  );
};

export default observer(MainPage);
