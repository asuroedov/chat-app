import React, { useCallback, useState } from "react";
import CircleButton from "../../primitives/CircleButton/CircleButton";

import styles from "./styles.module.scss";
import CreateChatModal from "../CreateChatModal/CreateChatModal";

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
      {modalVisible && <CreateChatModal closeModal={handleCloseCreateNewChat} />}
    </>
  );
};

export default ChatList;
