import * as yup from "yup";

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

export const schema = yup.object().shape({
  name: yup
    .string()
    .min(2)
    .max(20)
    .required(),
  surname: yup
    .string()
    .min(2)
    .max(20)
    .required(),
  address: yup
    .string()
    .min(2)
    .max(32)
    .required(),
  phone: yup
    .string()
    .matches(phoneRegExp, "Phone number is not valid")
    .required(),
});
