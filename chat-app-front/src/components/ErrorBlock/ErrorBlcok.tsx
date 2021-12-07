import React, { memo } from "react";
import ErrorCard from "./ErrorCard/ErrorCard";

import styles from "./styles.module.scss";

interface ErrorBlockProps {
  errorMessages: string[];
}

const ErrorBlock = ({ errorMessages }: ErrorBlockProps) => {
  if (!errorMessages || !errorMessages.length) return <></>;
  return (
    <div className={styles.wrapper}>
      {errorMessages.map((message, index) => (
        <ErrorCard key={message + index} text={message} />
      ))}
    </div>
  );
};

export default memo(ErrorBlock);
