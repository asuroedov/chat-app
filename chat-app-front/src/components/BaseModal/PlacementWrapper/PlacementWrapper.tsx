import React, { FC, memo } from "react";
import ReactDOM from "react-dom";

interface PlacementWrapperProps {
  inPortal?: boolean;
  children: React.ReactNode;
  placement?: Element;
}

const PlacementWrapper: FC<PlacementWrapperProps> = ({ inPortal = true, children, placement }) => {
  return <>{inPortal ? ReactDOM.createPortal(children, placement || document.body) : <>{children}</>}</>;
};

export default memo(PlacementWrapper);
