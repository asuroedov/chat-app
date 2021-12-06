import React from "react";

import styles from "./styles.module.scss";
import { observer } from "mobx-react-lite";
import chatsStore from "../../../../stores/chat/chatsStore";

const MessageArea = () => {
  const { chatMessages } = chatsStore;

  return (
    <div>
      {chatMessages.map((message) => (
        <div key={message.id}>
          {message.text} {message.owner.userName}
        </div>
      ))}
    </div>
  );
};

export default observer(MessageArea);
