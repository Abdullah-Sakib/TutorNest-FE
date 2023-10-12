import * as yup from "yup";

export const registerSchema = yup.object().shape({
  first_name: yup.string().required("first name is required"),
  last_name: yup.string().required("last name is required"),
  email: yup.string().required("email is required"),
  password: yup.string().min(6).max(32).required(),
  confirm_password: yup
    .string()
    .oneOf([yup.ref("password")], "password did not match"),
});
