import { object, string } from "yup";

const chickenSchema = object().shape({
  doYouLikeChicken: string()
    .required("Please confirm if you like chicken")
    .label("Do you like chicken")
    .default(""),
});

export default chickenSchema;
