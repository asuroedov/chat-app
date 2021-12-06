import React, { FC, memo, useCallback, useState } from "react";
import cn from "classnames";

import InputWithTitle from "../../../../primitives/Inputs/InputWithTitle/InputWithTitle";
import Button from "../../../../primitives/Button/Button";

import styles from "./styles.module.scss";
import ErrorBlock from "../../../../primitives/ErrorBlock/ErrorBlcok";
import chatEmits from "../../../../socket/chatEmits";

interface CreateChatModalContentProps {}

const CreateChatModalContent: FC<CreateChatModalContentProps> = () => {
  const [chatName, setChatName] = useState("");

  const onInputChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setChatName(event.currentTarget.value);
  }, []);

  const handleCreateChat = useCallback(() => {
    if (!chatName) return;
    chatEmits.createNewChat(chatName);
  }, [chatName]);

  return (
    <div className={styles.content}>
      <InputWithTitle
        value={chatName}
        onChange={onInputChange}
        placeholder={"Название чата"}
        className={styles.input}
      />

      <div className={styles.buttons}>
        <Button onClick={handleCreateChat} className={cn(styles.button, styles.mr10)}>
          Создать чат
        </Button>
        <Button onClick={() => chatEmits.getChats()} className={styles.button}>
          Отмена
        </Button>
      </div>

      <ErrorBlock errorMessages={[]} />
    </div>
  );
};

export default memo(CreateChatModalContent);
