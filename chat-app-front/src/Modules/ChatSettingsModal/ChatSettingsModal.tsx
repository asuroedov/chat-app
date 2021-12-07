import React, { FC, memo } from "react";
import BaseModal from "../../components/BaseModal/BaseModal";

import ModalTitle from "../../components/ModalTitle/ModalTitle";
import ChatModalContent from "./elems/Content/ChatSettingsContent";

import styles from "./styles.module.scss";

interface ChatSettingsModalProps {
  closeModal: () => void;
}

const ChatSettingsModal: FC<ChatSettingsModalProps> = ({ closeModal }) => {
  return (
    <BaseModal closeModal={closeModal} className={styles.modal}>
      <div className={styles.wrapper}>
        <ModalTitle title={"Настройки чата"} closeModal={closeModal} />
        <ChatModalContent />
      </div>
    </BaseModal>
  );
};

export default memo(ChatSettingsModal);
