import React, { useCallback } from "react";

import styles from "./styles.module.scss";
import Button from "../../../../components/Button/Button";
import chatEmits from "../../../../socket/chatEmits";
import { observer } from "mobx-react-lite";
import chatsStore from "../../../../stores/chat/chatsStore";

const ChatModalContent = () => {
  const { selectedChatId } = chatsStore;

  const handleCreateLink = useCallback(() => {
    if (!selectedChatId) return;
    chatEmits.createJoinLink(selectedChatId);
  }, [selectedChatId]);

  return (
    <div>
      <Button onClick={handleCreateLink}>Создать ссылку приглашения</Button>
    </div>
  );
};

export default observer(ChatModalContent);
