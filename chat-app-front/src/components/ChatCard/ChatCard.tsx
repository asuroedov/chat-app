import React, { FC, memo } from "react";
import cn from "classnames";

import styles from "./styles.module.scss";
import { MessageInterface } from "../../types/message";

interface ChatCardProps {
  chatName: string;
  lastMessage?: MessageInterface;
  className?: string;
  onClick?: () => void;
}

const ChatCard: FC<ChatCardProps> = ({ chatName, lastMessage, onClick, className }) => {
  return (
    <div className={cn(styles.chatCard, className)} onClick={onClick}>
      <div className={styles.chatName}>{chatName}</div>
      {lastMessage && <div className={styles.lastMessage}>{`${lastMessage.owner.userName}: ${lastMessage.text}`}</div>}
    </div>
  );
};

export default memo(ChatCard);
