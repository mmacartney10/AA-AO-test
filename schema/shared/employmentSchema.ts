import { object, string } from "yup";

export declare type EmploymentStatus =
  | "PERMANENT_FULL_TIME"
  | "PERMANENT_PART_TIME"
  | "SELF_EMPLOYED"
  | "CARER_CHILD"
  | "CARER_ADULT"
  | "FULL_TIME_EDUCATION"
  | "RETIRED"
  | "HOMEMAKER"
  | "UNEMPLOYED"
  | "STUDENT"
  | "ARMED_FORCES"
  | "OTHER";

const employmentSchema = object().shape({
  status: string()
    .required("Please choose an option")
    .label("Employment status"),
  occupation: string().when("status", ([employmentStatus], schema) => {
    const requiredFor: EmploymentStatus[] = [
      "PERMANENT_FULL_TIME",
      "PERMANENT_PART_TIME",
      "SELF_EMPLOYED",
      "ARMED_FORCES",
      "RETIRED",
    ];
    if (requiredFor.includes(employmentStatus)) {
      return schema.required("Please enter your occupation");
    }
    return schema;
  }),
  currentEmployer: string().when("status", ([employmentStatus], schema) => {
    const requiredFor: EmploymentStatus[] = [
      "PERMANENT_FULL_TIME",
      "PERMANENT_PART_TIME",
    ];
    if (requiredFor.includes(employmentStatus)) {
      return schema.concat(
        string()
          .label("Current employer")
          .required("Please enter your current employer")
      );
    }
    return schema;
  }),
  businessName: string().when("status", ([employmentStatus], schema) => {
    if (employmentStatus === "SELF_EMPLOYED") {
      return schema.concat(
        string()
          .label("Business name")
          .required("Please enter your business name")
      );
    }
    return schema;
  }),
  institutionName: string().when("status", ([employmentStatus], schema) => {
    if (employmentStatus === "STUDENT") {
      return schema.concat(
        string()
          .label("Institution name")
          .required("Please enter your institution name")
      );
    }
    return schema;
  }),
});

export default employmentSchema;
