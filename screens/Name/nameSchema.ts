import { mixed, object, string } from "yup";

type PersonalTitle =
  | "Mr"
  | "Mrs"
  | "Ms"
  | "Miss"
  | "Dr"
  | "Rev"
  | "Sir"
  | "Lord"
  | "Lady"
  | "Dame"
  | "Professor"
  | "Captain";

const nameSchema = object().shape({
  title: mixed<PersonalTitle>()
    .required("Please select a title")
    .label("Title")
    .default("Mr"),
  firstName: string()
    .label("FirstName")
    .required("Please enter your child's legal first name")
    .default(""),
  lastName: string()
    .label("Surname")
    .required("Please enter your child's legal surname")
    .default(""),
});

export default nameSchema;
