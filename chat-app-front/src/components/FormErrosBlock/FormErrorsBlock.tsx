import React from "react";
import { observer } from "mobx-react-lite";
import formErrors from "../../stores/formErrors/formErrors";
import matchFormErrorsMessage from "../../utils/form/matchFormErrorsMessage";

import styles from "./styles.module.scss";
import ErrorCard from "./elems/ErrorCard";

const FormErrorsBlock = () => {
  const errorFiledNames = formErrors.errorFieldNames;

  if (!errorFiledNames.size) return <></>;

  return (
    <div className={styles.wrapper}>
      {Array.from(errorFiledNames).map((filedName) => (
        <ErrorCard text={matchFormErrorsMessage(filedName)} />
      ))}
    </div>
  );
};

export default observer(FormErrorsBlock);
