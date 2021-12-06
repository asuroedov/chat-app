import React, { useCallback, useEffect, useState } from "react";
import CircleButton from "../../primitives/CircleButton/CircleButton";

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

  useEffect(() => {
    chatsStore.fetchChats();
  }, []);

  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.chatList}>
          {chats.map((chat) => (
            <ChatCard key={chat.id} {...chat} />
          ))}
        </div>
        <CircleButton onClick={handleOpenCreateNewChatClick} className={styles.addBtn} />
      </div>
      {modalVisible && <CreateChatModal closeModal={handleCloseCreateNewChat} />}
    </>
  );
};

export default observer(ChatList);