import React from "react";

import styles from "./styles.module.scss";
import { observer } from "mobx-react-lite";
import chatsStore from "../../../../stores/chat/chatsStore";
import MessageCard from "../../../../components/MessageCard/MessageCard";

const MessageArea = () => {
  const { chatMessages } = chatsStore;

  return (
    <div className={styles.messageArea}>
      {chatMessages.map((message) => (
        <MessageCard key={message.id} messageText={message.text} owner={message.owner} />
      ))}
    </div>
  );
};

export default observer(MessageArea);
