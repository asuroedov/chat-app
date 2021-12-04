import React, { FC } from "react";
import BaseModal from "../../primitives/BaseModal/BaseModal";

import styles from "./styles.module.scss";
import CreateChatModalTitle from "./elems/Title/CreateChatModalTitle";
import CreateChatModalContent from "./elems/Content/CreateChatModalContent";

interface CreateChatModalProps {
  closeModal: () => void;
}

const CreateChatModal: FC<CreateChatModalProps> = ({ closeModal }) => {
  return (
    <BaseModal closeModal={closeModal} className={styles.modal}>
      <div className={styles.wrapper}>
        <CreateChatModalTitle closeModal={closeModal} />
        <CreateChatModalContent />
      </div>
    </BaseModal>
  );
};

export default CreateChatModal;
