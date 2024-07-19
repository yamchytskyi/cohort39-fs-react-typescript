import { useState, createContext } from "react";

import Section from "lessons/Lesson_13/components/Section/Section";
import Button from "components/Button/Button";

import { MainTitle, MainWrapper } from "./styles";
import { UserData } from "./types";

// Шаг: Создаем контекст - хранилище данных к которому будем обращатьсяб которое мы хотим передать в любой компонент ниже
export const MainContext = createContext<UserData | undefined>({
  fullName: "",
  age: 0,
  jobPosition: "",
});

function Main() {
  const [userData, setUserData] = useState<undefined | UserData>(undefined);

  const getUserData = () => {
    // Предположим, что вы получили данные пользователя в константе userResponse используя Get запрос
    const userResponse = {
      fullName: "John Johnson",
      age: 30,
      jobPosition: "QA",
    };
    setUserData(userResponse);
  };

  console.log(userData);

  return (
    // Шаг 2: Обернуть все что есть в return в MainContext.Provider и передать то что хотим в value
    <MainContext.Provider value={userData}>
      <MainWrapper>
        <MainTitle>Main Component</MainTitle>
        <Button name="Get User Data" onClick={getUserData} />
        <Section/>
      </MainWrapper>
    </MainContext.Provider>
  );
}

export default Main;
