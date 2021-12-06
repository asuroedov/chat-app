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
      {chatName}
    </div>
  );
};

export default memo(ChatCard);
