import React, { FC, memo, useCallback, useState } from "react";
import FormInput from "../../../primitives/Inputs/FormInput/FormInput";
import { isEmail, passwordLength } from "../../../utils/formValidations";

interface AuthFieldsProps {
  mayBeStartValidate: boolean;
}

const AuthFields: FC<AuthFieldsProps> = ({ mayBeStartValidate }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChangeEmail = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.currentTarget.value);
  }, []);

  const handleChangePassword = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.currentTarget.value);
  }, []);

  return (
    <>
      <FormInput
        name={"email"}
        value={email}
        onChange={handleChangeEmail}
        placeholder={"email"}
        validations={[isEmail]}
        mayBeStartValidate={mayBeStartValidate}
      />
      <FormInput
        name={"password"}
        value={password}
        onChange={handleChangePassword}
        placeholder={"пароль"}
        validations={[passwordLength]}
        mayBeStartValidate={mayBeStartValidate}
      />
    </>
  );
};

export default memo(AuthFields);
