import React, { FC, memo } from "react";
import cn from "classnames";

import styles from "./styles.module.scss";
import { MessageInterface } from "../../types/message";

interface ChatCardProps {
  chatName: string;
  lastMessage?: MessageInterface;
  className?: string;
}

const ChatCard: FC<ChatCardProps> = ({ chatName, lastMessage, className }) => {
  return <div className={cn(styles.chatCard, className)}>{chatName}</div>;
};

export default memo(ChatCard);
