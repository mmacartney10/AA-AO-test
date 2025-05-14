import { object, string } from "yup";

const addressSchema = object().shape({
  addressLine1: string()
    .required("Please type the first line of your address")
    .label("Address line 1"),
  addressLine2: string()
    .required("Please type the second line of your address")
    .label("Address line 2"),
  addressLine3: string().label("Address line 3").default(""),
  addressLine4: string().label("Address line 4").default(""),
  addressLine5: string().label("Address line 5").default(""),
  postcode: string()
    .required("Please enter a valid UK postcode")
    .label("Postcode"),
  countryIso: string().required("Please select a country"),
});

export default addressSchema;
