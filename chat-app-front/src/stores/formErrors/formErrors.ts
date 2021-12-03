import { makeAutoObservable } from "mobx";
import { FormNames } from "../../utils/form/formNames";

class FormErrors {
  errorFieldNames = new Set<FormNames>();

  constructor() {
    makeAutoObservable(this);
  }

  addErrorField(fieldName: FormNames) {
    this.errorFieldNames.add(fieldName);
  }

  removeErrorField(fieldName: FormNames) {
    this.errorFieldNames.delete(fieldName);
  }
}

export default new FormErrors();
