import React, { FC, memo, useEffect, useMemo } from "react";
import cn from "classnames";
import BaseInput, { BaseInputProps } from "../BaseInput/BaseInput";

import styles from "./styles.module.scss";
import formErrors from "../../../stores/formErrors/formErrors";
import { FormNames } from "../../../utils/form/formNames";

interface FormInputInterface extends BaseInputProps {
  name: FormNames;
  validations?: ((value: string) => boolean)[];
  mayBeStartValidate: boolean;
}

const FormInput: FC<FormInputInterface> = ({ validations, name, mayBeStartValidate, ...props }) => {
  const { value } = props;

  const isValid = useMemo(() => {
    if (!mayBeStartValidate) return true;
    if (!validations) return true;
    return !validations.some((validationFn) => !validationFn(value));
  }, [validations, value, mayBeStartValidate]);

  useEffect(() => {
    isValid ? formErrors.removeErrorField(name) : formErrors.addErrorField(name);
  }, [isValid, name]);

  return <BaseInput className={cn({ [styles.error]: !isValid })} {...props} />;
};

export default memo(FormInput);
