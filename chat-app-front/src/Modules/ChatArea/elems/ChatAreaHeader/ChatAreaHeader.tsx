import React, { useCallback, useState } from "react";

import styles from "./styles.module.scss";
import { observer } from "mobx-react-lite";
import chatsStore from "../../../../stores/chat/chatsStore";
import SettingsIcon from "../../../../Icons/SettingsIcon/SettingsIcon";
import ChatSettingsModal from "../../../ChatSettingsModal/ChatSettingsModal";

const ChatAreaHeader = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const chat = chatsStore.currentChat();

  const closeModal = useCallback(() => {
    setModalVisible(false);
  }, []);

  const handleSettingsClick = useCallback(() => {
    setModalVisible(true);
  }, []);

  return (
    <div className={styles.chatAreaHeader}>
      <div className={styles.chatName}>{chat?.chatName || ""}</div>
      <SettingsIcon className={styles.settingsIcon} onClick={handleSettingsClick} />
      {modalVisible && <ChatSettingsModal closeModal={closeModal} />}
    </div>
  );
};

export default observer(ChatAreaHeader);
