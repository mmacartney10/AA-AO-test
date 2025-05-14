import { object, ref, string } from "yup";

const emailSchema = object().shape({
  emailAddress: string().label("EmailAddress").email().required(),
  confirmation: string()
    .label("EmailConfirmation")
    .email()
    .oneOf([ref("EmailAddress")], "Passwords must match")
    .required(),
});

export default emailSchema;
