import React, { FC, memo } from "react";
import cn from "classnames";
import styles from "./styles.module.scss";

interface DotIconInterface {
  className?: string;
}

const DotIcon: FC<DotIconInterface> = ({ className }) => {
  return (
    <svg
      className={cn(styles.icon, className)}
      xmlns="http://www.w3.org/2000/svg"
      width="5"
      height="5"
      viewBox="0 0 5 5"
      fill="none"
    >
      <circle cx="2.5" cy="2.5" r="2.5" fill="#fff" />
    </svg>
  );
};

export default memo(DotIcon);
