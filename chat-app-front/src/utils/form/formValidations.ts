export function length(min: number, max: number) {
  return (value: string) => value.length >= min && value.length <= max;
}

export function passwordLength(value: string) {
  return length(4, 20)(value);
}

export function isEmail(value: string) {
  let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return !!value.match(regexEmail);
}
