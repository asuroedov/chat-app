import React, { FC, memo } from "react";
import { UserInterface } from "../../types/user";

import styles from "./styles.module.scss";

interface MessageCardProps {
  messageText: string;
  owner: UserInterface;
  onClick?: () => void;
}

const MessageCard: FC<MessageCardProps> = ({ messageText, owner, onClick }) => {
  return (
    <div className={styles.messageCard} onClick={onClick}>
      {owner && <div className={styles.owner}>{owner.userName}</div>}
      <div>{messageText}</div>
    </div>
  );
};

export default memo(MessageCard);
