import { useFormik } from "formik";
import * as Yup from "yup";

import Input from "components/Input/Input";
import Button from "components/Button/Button";

import {
  StyledContactUsForm,
  StyledTitle,
  StyledInputsContainer,
} from "./styles";
import { CONTACT_US_FORM_NAMES } from "./types";

function ContactUsForm() {
  const validationSchema = Yup.object().shape({
    [CONTACT_US_FORM_NAMES.FULL_NAME]: Yup.string()
      .required("Full name field is required")
      .min(3, "Min length should be 3")
      .max(50, "Maximum length should be 50"),
    [CONTACT_US_FORM_NAMES.PHONE]: Yup.string()
      .required("Phone field is required")
      .min(4, "Min length should be 4")
      .max(20, "Maximum length should be 20"),
    [CONTACT_US_FORM_NAMES.EMAIL]: Yup.string().min(6).max(60),
  });

  const formik = useFormik({
    initialValues: {
      [CONTACT_US_FORM_NAMES.FULL_NAME]: "",
      [CONTACT_US_FORM_NAMES.PHONE]: "",
      [CONTACT_US_FORM_NAMES.EMAIL]: "",
    },
    validationSchema: validationSchema,

    validateOnMount: false,

    onSubmit: (values, helpers) => {
      console.log("Values:", values);
    },
  });

  return (
    <StyledContactUsForm onSubmit={formik.handleSubmit}>
      <StyledTitle>Contact Us</StyledTitle>
      <StyledInputsContainer>
        <Input
          label="Full name"
          placeholder="Your full name"
          id="full-name-input"
          name={CONTACT_US_FORM_NAMES.FULL_NAME}
          type="text"
          onChange={formik.handleChange}
          value={formik.values[CONTACT_US_FORM_NAMES.FULL_NAME]}
          error={formik.errors[CONTACT_US_FORM_NAMES.FULL_NAME]}
        />
        <Input
          label="Phone"
          placeholder="Your phone number"
          id="phone-input"
          name={CONTACT_US_FORM_NAMES.PHONE}
          type="text"
          onChange={formik.handleChange}
          value={formik.values[CONTACT_US_FORM_NAMES.PHONE]}
          error={formik.errors[CONTACT_US_FORM_NAMES.PHONE]}

        />
        <Input
          label="Email"
          placeholder="Your email"
          id="email"
          name={CONTACT_US_FORM_NAMES.EMAIL}
          type="text"
          onChange={formik.handleChange}
          value={formik.values[CONTACT_US_FORM_NAMES.EMAIL]}
          error={formik.errors[CONTACT_US_FORM_NAMES.EMAIL]}

        />
      </StyledInputsContainer>
      <Button disabled={formik.isSubmitting} name="SEND REQUEST" type="submit" />
    </StyledContactUsForm>
  );
}

export default ContactUsForm;
