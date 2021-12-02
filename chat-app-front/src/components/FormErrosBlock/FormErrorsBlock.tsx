import React from "react";
import { observer } from "mobx-react-lite";
import formErrors from "../../stores/formErrors/formErrors";
import matchFormErrorsMessage from "../../utils/form/matchFormErrorsMessage";

const FormErrorsBlock = () => {
  const errorFiledNames = formErrors.errorFieldNames;

  return <div>{Array.from(errorFiledNames).map((filedName) => matchFormErrorsMessage(filedName))}</div>;
};

export default observer(FormErrorsBlock);
