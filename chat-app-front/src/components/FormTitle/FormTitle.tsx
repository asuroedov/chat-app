import React, { FC, memo } from "react";
import cn from "classnames";

import styles from "./styles.module.scss";

interface FormTitleProps {
  title: string;
  className?: string;
}

const FormTitle: FC<FormTitleProps> = ({ title, className }) => {
  return <div className={cn(styles.title, className)}>{title}</div>;
};

export default memo(FormTitle);
