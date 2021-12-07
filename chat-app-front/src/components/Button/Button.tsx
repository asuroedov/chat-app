import React, { FC, memo } from "react";
import cn from "classnames";

import styles from "./styles.module.scss";

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick: () => void;
}

const Button: FC<ButtonProps> = ({ onClick, className, children }) => {
  return (
    <button onClick={onClick} className={cn(styles.button, className)}>
      {children}
    </button>
  );
};

export default memo(Button);
