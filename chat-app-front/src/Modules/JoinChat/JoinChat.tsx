import React, { memo } from "react";
import { useMatch } from "react-router-dom";
import jwt from "jsonwebtoken";

import Button from "../../components/Button/Button";
import chatEmits from "../../socket/chatEmits";

const JoinChat = () => {
  const match = useMatch("/join/:link");
  const joinLink = match?.params?.link;
  const jwtKey = process.env.REACT_APP_JWT_KEY;

  if (!joinLink || !jwtKey) return <></>;

  const { chatId, chatName } = jwt.verify(joinLink, jwtKey) as { chatId: number; chatName: string };

  const handleJoinChat = () => {
    chatEmits.addUserInChat(joinLink);
  };

  return (
    <div>
      <div>Приглашение в чат {chatName}</div>
      <Button onClick={handleJoinChat}>Вступить</Button>
    </div>
  );
};

export default memo(JoinChat);
