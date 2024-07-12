import Button from "components/Button/Button";
import Input from "components/Input/Input";

import { StyledContainer, StyledTitle, StyledInputsContainer } from "./styles";

function LoginForm() {
  /* Пример работы с onClick() */
  // const clickOnMe = (event, someAttr) => {
  //   console.log(event)
  //   console.log(someAttr);
  //   console.log("Trigger on button works, button is clicked");
  // };

  // Глеб, этот момент я не до конца понял:
  // в компоненте Button мы указали " onClick: (event: MouseEvent) => void;"
  // значит теперь во всех функциях, которые мы передаем в Button onClick, мы указываем event: React.MouseEvent?
  const login = (event: React.MouseEvent): void => {
    event.preventDefault();
    console.log("User logged in succesfully");
  };

  return (
    <StyledContainer>
      <StyledTitle>Login form</StyledTitle>
      <StyledInputsContainer>
        <Input
          id="email-id"
          name="email"
          type="email"
          placeholder="Enter your email"
          label="Email"
        />
        <Input
          id="password-id"
          name="password"
          type="password"
          placeholder="Enter your password"
          label="Password"
        />
      </StyledInputsContainer>
      <Button onClick={login} name="Login" type="submit" />
      {/* Пример работы с onClick() */}
      {/* <button onClick={(event) => clickOnMe(event, "Some message")} className="button-click" type="button">Click me!!!</button> */}
    </StyledContainer>
  );
}

export default LoginForm;
