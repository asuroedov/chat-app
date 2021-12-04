import React from "react";
import { observer } from "mobx-react-lite";
import formErrors from "../../stores/formErrors/formErrors";
import authStore from "../../stores/auth/authStore";
import matchFormErrorsMessage from "../../utils/form/matchFormErrorsMessage";

import styles from "./styles.module.scss";
import ErrorCard from "./elems/ErrorCard";

const FormErrorsBlock = () => {
  const errorFiledNames = formErrors.errorFieldNames;
  const authErrorMessage = authStore.errorMessage;

  if (!errorFiledNames.size && !authErrorMessage) return <></>;

  return (
    <div className={styles.wrapper}>
      {Array.from(errorFiledNames).map((filedName, index) => (
        <ErrorCard key={filedName + index} text={matchFormErrorsMessage(filedName)} />
      ))}
      {authErrorMessage && <ErrorCard text={authErrorMessage} />}
    </div>
  );
};

export default observer(FormErrorsBlock);
