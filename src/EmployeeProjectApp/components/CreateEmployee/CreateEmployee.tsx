import { useContext,  } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

import Button from "components/Button/Button";
import Input from "components/Input/Input";
import {InfoAboutEmployee} from "EmployeeProjectApp/components/LayoutEmployee/LayoutEmployee"

import { EMPLOYEE_FORM_NAMES } from "./types";

import {
  StyledFormContainer,
  StyledTitle,
  StyledInputsContainer,
} from "./styles";

function CreateEmployee() {
const layoutEmployeeData = useContext(InfoAboutEmployee)
console.log(layoutEmployeeData)


  const validationSchema = Yup.object().shape({
    [EMPLOYEE_FORM_NAMES.NAME]: Yup.string()
      .required("This field is required")
      .min(2, "Name field must contain minimum 2 characters")
      .max(50, "Name field must contain maximum 50 characters"),
    [EMPLOYEE_FORM_NAMES.SURNAME]: Yup.string()
      .required("This field is required")
      .max(15, "Surname field must contain maximum 15 characters"),
      [EMPLOYEE_FORM_NAMES.AGE]: Yup.number()
      .required("This field is required")
      .min(1, "Age field must contain minimum 1 characters")
      .max(3, "Age field must contain maximum 3 characters"),
      [EMPLOYEE_FORM_NAMES.JOB_POSITION]: Yup.string()
      .max(30, "Job Position field must contain maximum 30 characters"),
      
  });

  const formik = useFormik({

    initialValues: {
      [EMPLOYEE_FORM_NAMES.NAME]: "",
      [EMPLOYEE_FORM_NAMES.SURNAME]: "",
      [EMPLOYEE_FORM_NAMES.AGE]: 0,
      [EMPLOYEE_FORM_NAMES.JOB_POSITION]: "",
    },
    validationSchema: validationSchema,

    validateOnMount: false,
 
    validateOnChange: true,
    onSubmit: (values, helpers) => {
      console.log()
     layoutEmployeeData.setEmployeeData(values)
    },
  });




  const login = (event: React.MouseEvent): void => {
    // event.preventDefault();
    // console.log("Data to send on a server", {
    //   email: emailValue,
    //   passord: passwordValue,
    // });
  };

  return (
    <StyledFormContainer onSubmit={formik.handleSubmit}>
      <StyledTitle>Login form</StyledTitle>
      <StyledInputsContainer>
        <Input
          id="name-id"
          name={EMPLOYEE_FORM_NAMES.NAME}
          type="text"
          placeholder="John"
          label="Name*"
       
        />
        <Input
          id="surname-id"
          name={EMPLOYEE_FORM_NAMES.SURNAME}
          type="text"
          placeholder="Johnson"
          label="Surname*"
        />
        <Input
          id="age-id"
          name={EMPLOYEE_FORM_NAMES.AGE}
          type="text"
          placeholder="25"
          label="Age*"
        />
        <Input
          id="job-position-id"
          name={EMPLOYEE_FORM_NAMES.JOB_POSITION}
          type="text"
          placeholder="QA"
          label="Job Position*"
        />
      </StyledInputsContainer>
      <Button name="Create" type="submit" disabled={formik.isSubmitting} />
    </StyledFormContainer>
  );
}

export default CreateEmployee;
