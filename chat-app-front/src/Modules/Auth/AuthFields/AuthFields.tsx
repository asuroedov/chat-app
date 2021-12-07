import React, { FC, useCallback, useState } from "react";
import FormInput from "../../../components/Inputs/FormInput/FormInput";
import { isEmail, passwordLength } from "../../../utils/form/formValidations";
import { FormNames } from "../../../utils/form/formNames";

import styles from "./styles.module.scss";
import Button from "../../../components/Button/Button";
import { observer } from "mobx-react-lite";
import formErrors from "../../../stores/formErrors/formErrors";
import authStore from "../../../stores/auth/authStore";

const AuthFields: FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mayBeStartValidate, setMayBeStartValidate] = useState(false);

  const { errorFieldNames } = formErrors;

  const handleChangeEmail = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.currentTarget.value);
  }, []);

  const handleChangePassword = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.currentTarget.value);
  }, []);

  const handleAuthClick = useCallback(() => {
    setMayBeStartValidate(true);

    setTimeout(() => {
      if (errorFieldNames.size) return;
      authStore.login(email, password);
    }, 0);
  }, [email, password, errorFieldNames.size]);

  return (
    <>
      <FormInput
        name={FormNames.email}
        value={email}
        onChange={handleChangeEmail}
        placeholder={"email"}
        validations={[isEmail]}
        mayBeStartValidate={mayBeStartValidate}
        className={styles.input}
      />
      <FormInput
        name={FormNames.password}
        value={password}
        onChange={handleChangePassword}
        placeholder={"пароль"}
        validations={[passwordLength]}
        mayBeStartValidate={mayBeStartValidate}
        type={"password"}
        className={styles.input}
      />
      <Button onClick={handleAuthClick} className={styles.button}>
        Войти
      </Button>
    </>
  );
};

export default observer(AuthFields);
