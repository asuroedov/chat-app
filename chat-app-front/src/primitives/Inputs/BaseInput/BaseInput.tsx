import React, { FC, memo } from "react";

export interface BaseInputProps {
  placeholder?: string;
  type?: "text" | "password";
  value: string;
  className?: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const BaseInput: FC<BaseInputProps> = (props) => {
  return <input {...props} />;
};

export default memo(BaseInput);
