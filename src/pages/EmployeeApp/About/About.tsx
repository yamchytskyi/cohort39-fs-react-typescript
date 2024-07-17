import { useNavigate } from "react-router-dom";

import Button from "components/Button/Button";

import { PageWrapper, ButtonControl } from "./styles";


function About() {

  // хук useNavigate из библиотеки react-router-dom возвращает функцию navigate, которая принимет строку куда нужно перейти
  const navigate = useNavigate();

  const goToHomePage = () => {
    navigate("/")
  }
  
  // -1 возвращает на предыдущую страницу
  const goBack = () => {
    navigate(-1);
  }

  return (
    <PageWrapper>
      Informaiton About Company
      <ButtonControl>
        <Button name="Go to Home page" onClick={goToHomePage} />
      </ButtonControl>
      <ButtonControl>
        <Button name="Go back" onClick={goBack} />
      </ButtonControl>
    </PageWrapper>
  );
}

export default About;
