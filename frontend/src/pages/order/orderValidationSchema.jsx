import * as Yup from "yup";

const orderValidationSchema = Yup.object({
  fName: Yup.string()
    .required("First name is required")
    .matches(/^[a-zA-Z]+$/, "First name should not contain numbers"),
  lName: Yup.string()
    .required("Last name is required")
    .matches(/^[a-zA-Z]+$/, "Last name should not contain numbers"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  phone: Yup.string().required("Phone number is required"),
  city: Yup.string().required("City is required"),
  address: Yup.string().required("Address is required"),
  payment: Yup.string().required("Payment method is required"),
  card: Yup.string().required("Card number or Mpesa number is required"),
});

export default orderValidationSchema;
