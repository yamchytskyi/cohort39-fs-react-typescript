import Button from "../Button/Button";
import Input from "../Input/Input";

import "./styles.css";

function LoginForm() {
  /* Пример работы с onClick() */
  // const clickOnMe = (event, someAttr) => {
  //   console.log(event)
  //   console.log(someAttr);
  //   console.log("Trigger on button works, button is clicked");
  // };

  const login = (event) => {
    event.preventDefault();
    console.log("User logged in succesfully");
  }

  return (
    <form className="login-form-container">
      <p className="title">Login form</p>
      <div className="inputs-container">
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
      </div>
      <Button onClick={login} name="Login" type="submit" />
      {/* Пример работы с onClick() */}
      {/* <button onClick={(event) => clickOnMe(event, "Some message")} className="button-click" type="button">Click me!!!</button> */}
    </form>
  );
}

export default LoginForm;