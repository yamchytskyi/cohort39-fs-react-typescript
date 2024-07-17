import { MouseEvent, useState, ChangeEvent } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

import Button from "components/Button/Button";
import Input from "components/Input/Input";
import { LOGIN_FORM_NAMES } from "./types";

import {
  StyledFormContainer,
  StyledTitle,
  StyledInputsContainer,
} from "./styles";

function LoginForm() {
  /* Пример работы с onClick() */
  // const clickOnMe = (event, someAttr) => {
  //   console.log(event)
  //   console.log(someAttr);
  //   console.log("Trigger on button works, button is clicked");
  // };

  // валидационная схема
  const validationSchema = Yup.object().shape({
    [LOGIN_FORM_NAMES.EMAIL]: Yup.string()
      .required("This field is required")
      .email("This field must be email like"),
    [LOGIN_FORM_NAMES.PASSWORD]: Yup.string()
      .required("This field is required")
      .min(5, "Password field must contain minimum 5 characters")
      .max(15, "Password field must contain maximum 15 characters"),
  });

  const formik = useFormik({
    // ----------------------------- old way ----------------------
    // const [emailValue, setEmailValue] = useState<string>("");
    // const [passwordValue, setPasswordValue] = useState<string>("");
    initialValues: {
      [LOGIN_FORM_NAMES.EMAIL]: "",
      [LOGIN_FORM_NAMES.PASSWORD]: "",
    },
    validationSchema: validationSchema,
    // валидация при маунте
    validateOnMount: false,
    // валидация при изменении
    validateOnChange: true,
    onSubmit: (values, helpers) => {
      //тут пишем логику сбора данных из формы, создания карточек, отправи формы и т.д.
      // values - обьект в котором будут лежать значение из формы инпутов на момент нажатия кнопки типа submit
      // helpers - вспомогательные функции для контроля элементов формы
      console.log("onSubmit", values, helpers);
    },
  });

  console.log(formik);

  // const onEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
  //   setEmailValue(event.target.value);
  // };
  // const onPasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
  //   setPasswordValue(event.target.value);
  // };

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
          id="email-id"
          name={LOGIN_FORM_NAMES.EMAIL}
          // делаем типа text что бы это контролировал не браузер, а я(formik)
          // type="email"
          type="text"
          placeholder="Enter your email"
          label="Email"
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.errors[LOGIN_FORM_NAMES.EMAIL]}
        />
        <Input
          id="password-id"
          name={LOGIN_FORM_NAMES.PASSWORD}
          type="password"
          placeholder="Enter your password"
          label="Password"
          value={formik.values.password}
          onChange={formik.handleChange}
          error={formik.errors[LOGIN_FORM_NAMES.PASSWORD]}
        />
      </StyledInputsContainer>
      {/* добавляем блокировку пока идет запрос disabled={formik.isSubmitting}*/}
      <Button name="Login" type="submit" disabled={formik.isSubmitting} />
      {/* Пример работы с onClick() */}
      {/* <button onClick={(event) => clickOnMe(event, "Some message")} className="button-click" type="button">Click me!!!</button> */}
    </StyledFormContainer>
  );
}

export default LoginForm;
