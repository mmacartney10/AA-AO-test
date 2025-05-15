import { object, ref, string } from "yup";

const emailSchema = object().shape({
  emailAddress: string().label("EmailAddress").email().required().default(""),
  confirmation: string()
    .label("EmailConfirmation")
    .email()
    .oneOf([ref("EmailAddress")], "Passwords must match")
    .required()
    .default(""),
});

export default emailSchema;
