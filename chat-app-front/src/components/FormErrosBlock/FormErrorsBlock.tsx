import React from "react";
import { observer } from "mobx-react-lite";
import formErrors from "../../stores/formErrors/formErrors";
import authStore from "../../stores/auth/authStore";
import matchFormErrorsMessage from "../../utils/form/matchFormErrorsMessage";
import ErrorBlock from "../ErrorBlock/ErrorBlcok";

const FormErrorsBlock = () => {
  const errorFiledNames = formErrors.errorFieldNames;
  const authErrorMessage = authStore.errorMessage;

  if (!errorFiledNames.size && !authErrorMessage) return <></>;

  return (
    <ErrorBlock
      errorMessages={Array.from(errorFiledNames)
        .map((filedName) => matchFormErrorsMessage(filedName))
        .concat(authErrorMessage)}
    />
  );
};

export default observer(FormErrorsBlock);
