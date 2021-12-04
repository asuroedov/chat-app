import React, { memo } from "react";

interface CloseIconProps {
  className?: string;
  onClick?: () => void;
}

const CloseIcon = ({ className, onClick }: CloseIconProps) => {
  return (
    <svg className={className} onClick={onClick} width="20" height="20" viewBox="0 0 1024 1024">
      <path d="M0 85.332l85.333-85.333 426.667 426.666 426.666-426.666 85.334 85.333-426.666 426.667 426.666 426.666-85.334 85.334-426.666-426.666-426.667 426.666-85.333-85.334 426.666-426.666-426.666-426.667z"></path>
    </svg>
  );
};

export default memo(CloseIcon);
