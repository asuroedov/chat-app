import React from "react";

import ChatAreaHeader from "./elems/ChatAreaHeader/ChatAreaHeader";
import ChatAreaFooter from "./elems/ChatAreaFooter/ChatAreaFooter";
import MessageArea from "./elems/MessageArea/MessageArea";

import styles from "./styles.module.scss";

const ChatArea = () => {
  return (
    <div className={styles.chatArea}>
      <ChatAreaHeader />
      <MessageArea />
      <ChatAreaFooter />
    </div>
  );
};

export default ChatArea;
