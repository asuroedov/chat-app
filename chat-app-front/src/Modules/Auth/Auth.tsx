import React, { FC } from "react";
import { Navigate } from "react-router-dom";
import { observer } from "mobx-react-lite";

import AuthFields from "./AuthFields/AuthFields";
import FormErrorsBlock from "../../components/FormErrosBlock/FormErrorsBlock";
import FormTitle from "../../primitives/FormTitle/FormTitle";

import authStore from "../../stores/auth/authStore";

import styles from "./styles.module.scss";

const Auth: FC = () => {
  const { token } = authStore;

  if (token) return <Navigate to={"/"} />;

  return (
    <form className={styles.container} onSubmit={(event) => event.preventDefault()}>
      <FormTitle title={"Вход"} />
      <AuthFields />
      <FormErrorsBlock />
    </form>
  );
};

export default observer(Auth);
