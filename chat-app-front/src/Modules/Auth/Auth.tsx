import React, { FC, memo, useCallback, useState } from "react";
import AuthFields from "./AuthFields/AuthFields";

import styles from "./styles.module.scss";
import FormErrorsBlock from "../../components/FormErrosBlock/FormErrorsBlock";

const Auth: FC = () => {
  const [mayBeStartValidate, setMayBeStartValidate] = useState(false);

  const handleAuthClick = useCallback(() => {
    setMayBeStartValidate(true);
  }, []);

  return (
    <div className={styles.container}>
      <form onSubmit={(event) => event.preventDefault()}>
        <AuthFields mayBeStartValidate={mayBeStartValidate} />
        <button onClick={handleAuthClick}>Войти</button>
        <FormErrorsBlock />
      </form>
    </div>
  );
};

export default memo(Auth);
