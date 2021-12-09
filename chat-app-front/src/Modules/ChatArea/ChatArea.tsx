import React from "react";

import ChatAreaHeader from "./elems/ChatAreaHeader/ChatAreaHeader";
import ChatAreaFooter from "./elems/ChatAreaFooter/ChatAreaFooter";
import MessageArea from "./elems/MessageArea/MessageArea";

import styles from "./styles.module.scss";
import ChatNoSelectBlock from "../../components/ChatNoSelectBlock/ChatNoSelectBlock";
import chatsStore from "../../stores/chat/chatsStore";
import { observer } from "mobx-react-lite";

const ChatArea = () => {
  const { selectedChatId } = chatsStore;
  if (!selectedChatId) return <ChatNoSelectBlock />;

  return (
    <div className={styles.chatArea}>
      <ChatAreaHeader />
      <MessageArea />
      <ChatAreaFooter />
    </div>
  );
};

export default observer(ChatArea);
