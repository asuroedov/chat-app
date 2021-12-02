import React, { FC, memo, useMemo } from "react";
import cn from "classnames";
import BaseInput, { BaseInputProps } from "../BaseInput/BaseInput";

import styles from "./styles.module.scss";

interface FormInputInterface extends BaseInputProps {
  name?: string;
  validations?: ((value: string) => boolean)[];
  mayBeStartValidate: boolean;
}

const FormInput: FC<FormInputInterface> = ({ validations, mayBeStartValidate, ...props }) => {
  const { value } = props;

  const isValid = useMemo(() => {
    if (!mayBeStartValidate) return true;
    if (!validations) return true;
    return !validations.some((validationFn) => !validationFn(value));
  }, [validations, value, mayBeStartValidate]);

  return <BaseInput className={cn({ [styles.error]: !isValid })} {...props} />;
};

export default memo(FormInput);
