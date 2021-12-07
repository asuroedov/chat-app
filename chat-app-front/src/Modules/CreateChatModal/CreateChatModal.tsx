import React, { FC } from "react";
import BaseModal from "../../components/BaseModal/BaseModal";

import styles from "./styles.module.scss";
import CreateChatModalTitle from "../../components/ModalTitle/ModalTitle";
import CreateChatModalContent from "./elems/Content/CreateChatModalContent";

interface CreateChatModalProps {
  closeModal: () => void;
}

const CreateChatModal: FC<CreateChatModalProps> = ({ closeModal }) => {
  return (
    <BaseModal closeModal={closeModal} className={styles.modal}>
      <div className={styles.wrapper}>
        <CreateChatModalTitle closeModal={closeModal} title={"Создание нового чата"} />
        <CreateChatModalContent />
      </div>
    </BaseModal>
  );
};

export default CreateChatModal;
