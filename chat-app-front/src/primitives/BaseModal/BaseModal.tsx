import React, { FC, memo, useCallback } from "react";
import cn from "classnames";

import PlacementWrapper from "./PlacementWrapper/PlacementWrapper";

import styles from "./styles.module.scss";

interface BaseModalProps {
  closeModal: () => void;
  children?: React.ReactNode;
  placement?: Element;
  inPortal?: boolean;
  closeOnOutsideClick?: boolean;
  className?: string;
  removeBlackout?: boolean;
}

const BaseModal: FC<BaseModalProps> = ({
  closeModal,
  children,
  placement,
  inPortal,
  closeOnOutsideClick = true,
  className,
  removeBlackout,
}) => {
  const handleOutsideClick = useCallback(() => {
    closeOnOutsideClick && closeModal && closeModal();
  }, [closeOnOutsideClick, closeModal]);

  const handleModalClick = useCallback((event: React.MouseEvent) => {
    event.stopPropagation();
  }, []);

  return (
    <PlacementWrapper placement={placement} inPortal={inPortal}>
      <div className={styles.positionWrapper}>
        <div
          className={cn(styles.outsideWrapper, { [styles.withoutBlackout]: removeBlackout })}
          onClick={handleOutsideClick}
        />
        <div className={cn(styles.modalWrapper, className)} onClick={handleModalClick}>
          {children}
        </div>
      </div>
    </PlacementWrapper>
  );
};

export default memo(BaseModal);
