import { FormNames } from "./formNames";

export default function matchFormErrorsMessage(errorField: FormNames) {
  const matchObject = {
    [FormNames.email]: "Email некорректен",
    [FormNames.password]: "Пароль должен быть от 4 до 20 символов",
  };

  return matchObject[errorField];
}
