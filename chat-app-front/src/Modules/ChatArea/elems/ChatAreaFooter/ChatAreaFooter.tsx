import React, { memo, useCallback, useState } from "react";

import SendIcon from "../../../../Icons/SendIcon/SendIcon";

import chatsStore from "../../../../stores/chat/chatsStore";

import styles from "./styles.module.scss";

const ChatAreaFooter = () => {
  const [message, setMessage] = useState("");

  const handleChangeMessage = useCallback((event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(event.currentTarget.value);
  }, []);

  const handleSendMessageClick = useCallback(() => {
    if (!message) return;
    chatsStore.sendMessage(message);
  }, [message]);

  return (
    <div className={styles.chatAreaFooter}>
      <textarea rows={3} value={message} onChange={handleChangeMessage} />
      <div className={styles.sendIconWrapper} onClick={handleSendMessageClick}>
        <SendIcon className={styles.sendIcon} />
      </div>
    </div>
  );
};

export default memo(ChatAreaFooter);
