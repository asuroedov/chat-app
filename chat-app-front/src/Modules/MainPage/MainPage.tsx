import React, { memo } from "react";
import ChatList from "../ChatList/ChatList";
import ChatArea from "../ChatArea/ChatArea";

import styles from "./styles.module.scss";

const MainPage = () => {
  return (
    <div className={styles.wrapper}>
      <ChatList />
      <ChatArea />
    </div>
  );
};

export default memo(MainPage);
