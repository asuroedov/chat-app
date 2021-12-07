import React, { FC, memo } from "react";
import BaseInput, { BaseInputProps } from "../BaseInput/BaseInput";

import styles from "./styles.module.scss";
import cn from "classnames";

interface InputWithTitleProps extends BaseInputProps {}

const InputWithTitle: FC<InputWithTitleProps> = ({ placeholder, ...props }) => {
  const { value, className } = props;

  return (
    <div className={cn(styles.wrapper, className)}>
      <BaseInput {...props} className={cn(styles.input, className)} />
      <div className={cn(styles.label, { [styles.transformLabel]: !!value })}>{placeholder}</div>
    </div>
  );
};

export default memo(InputWithTitle);
