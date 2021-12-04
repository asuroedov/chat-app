import React, { FC, memo } from "react";

import CloseIcon from "../../../../Icons/CloseIcon/CloseIcon";

import styles from "./styles.module.scss";

interface CreateChatModalTitleProps {
  title?: string;
  closeModal: () => void;
}

const CreateChatModalTitle: FC<CreateChatModalTitleProps> = ({ title, closeModal }) => {
  return (
    <div className={styles.titleWrapper}>
      <div className={styles.title}>{title || "Создание нового чата"} </div>
      <CloseIcon className={styles.closeIcon} onClick={closeModal} />
    </div>
  );
};

export default memo(CreateChatModalTitle);
