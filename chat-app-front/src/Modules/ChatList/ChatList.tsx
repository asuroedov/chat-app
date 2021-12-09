import React, { useCallback, useEffect, useState } from "react";
import CircleButton from "../../components/CircleButton/CircleButton";

import styles from "./styles.module.scss";
import CreateChatModal from "../CreateChatModal/CreateChatModal";
import chatsStore from "../../stores/chat/chatsStore";
import ChatCard from "../../components/ChatCard/ChatCard";
import { observer } from "mobx-react-lite";

const ChatList = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const { chats } = chatsStore;

  const handleOpenCreateNewChatClick = useCallback(() => {
    setModalVisible(true);
  }, []);

  const handleCloseCreateNewChat = useCallback(() => {
    setModalVisible(false);
  }, []);

  const handleChatClick = useCallback((chatId: number) => {
    chatsStore.setSelectedChatIndex(chatId);
    chatsStore.fetchMessages();
  }, []);

  useEffect(() => {
    chatsStore.fetchChats();
  }, []);

  return (
    <>
      <div className={styles.wrapper}>
        {chats.map((chat) => (
          <ChatCard key={chat.id} {...chat} onClick={() => handleChatClick(chat.id)} />
        ))}
        <CircleButton onClick={handleOpenCreateNewChatClick} className={styles.addBtn} />
      </div>
      {modalVisible && <CreateChatModal closeModal={handleCloseCreateNewChat} />}
    </>
  );
};

export default observer(ChatList);
