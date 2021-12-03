import React, { FC, memo, useCallback, useState } from "react";
import AuthFields from "./AuthFields/AuthFields";

import styles from "./styles.module.scss";
import FormErrorsBlock from "../../components/FormErrosBlock/FormErrorsBlock";
import Button from "../../primitives/Button/Button";

const Auth: FC = () => {
  const [mayBeStartValidate, setMayBeStartValidate] = useState(false);

  const handleAuthClick = useCallback(() => {
    setMayBeStartValidate(true);
  }, []);

  return (
    <form className={styles.container} onSubmit={(event) => event.preventDefault()}>
      <AuthFields mayBeStartValidate={mayBeStartValidate} />
      <Button onClick={handleAuthClick} className={styles.button}>
        Войти
      </Button>
      <FormErrorsBlock />
    </form>
  );
};

export default memo(Auth);
