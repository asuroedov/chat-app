import React, { FC, memo } from "react";
import styles from "./styles.module.scss";
import DotIcon from "../../../Icons/DotIcon/DotIcon";

interface ErrorCardInterface {
  text: string;
}

const ErrorCard: FC<ErrorCardInterface> = ({ text }) => {
  return (
    <div className={styles.wrapper}>
      <DotIcon className={styles.icon} />
      {text}
    </div>
  );
};

export default memo(ErrorCard);
