import React, { useCallback, useState } from "react";
import CircleButton from "../../primitives/CircleButton/CircleButton";

import styles from "./styles.module.scss";
import BaseModal from "../../primitives/BaseModal/BaseModal";

const ChatList = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const handleOpenCreateNewChatClick = useCallback(() => {
    setModalVisible(true);
  }, []);

  const handleCloseCreateNewChat = useCallback(() => {
    setModalVisible(false);
  }, []);

  return (
    <>
      <div className={styles.wrapper}>
        <CircleButton onClick={handleOpenCreateNewChatClick} />
      </div>
      {modalVisible && <BaseModal closeModal={handleCloseCreateNewChat}>123</BaseModal>}
    </>
  );
};

export default ChatList;
