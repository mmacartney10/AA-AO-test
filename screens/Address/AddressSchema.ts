import { object, string } from "yup";

const addressSchema = object().shape({
  addressLine1: string()
    .required("Please type the first line of your address")
    .label("Address line 1")
    .default(""),
  addressLine2: string()
    .required("Please type the second line of your address")
    .label("Address line 2")
    .default(""),
  addressLine3: string().label("Address line 3"),
  addressLine4: string().label("Address line 4"),
  addressLine5: string().label("Address line 5"),
  postcode: string()
    .required("Please enter a valid UK postcode")
    .label("Postcode")
    .default(""),
  countryIso: string().required("Please select a country").default(""),
});

export default addressSchema;
