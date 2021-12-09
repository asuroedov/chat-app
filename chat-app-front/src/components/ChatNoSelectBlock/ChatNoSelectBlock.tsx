import React, { memo } from "react";

import styles from "./styles.module.scss";

const ChatNoSelectBlock = () => {
  return <div className={styles.chatNoSelect}>Выберете чат</div>;
};

export default memo(ChatNoSelectBlock);
