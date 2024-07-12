import { useState, ChangeEvent, useEffect } from "react";

import Input from "components/Input/Input";
import Button from "components/Button/Button";

import { Lesson_09_Wrapper, InputControl, ButtonControl } from "./styles";

export function Lesson_09() {
  const [SearchInputValue, setSearchInputValue] = useState<string>("");

  const onChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
    // console.log("Input onChange event", event.target.value);

    //     setSearchInputValue((prevValue) => {
    //       return (prevValue = event.target.value);
    //     });
    //     СОКРАЩЕННО:
    setSearchInputValue(event.target.value);
  };

  const onSearch = () => {
    console.log(SearchInputValue);
  };

  // 1 Lifecycle phase - MOUNTING
  // 1й аргумент - функция которая выполнится в определенную фазу
  // 2й аргумент - массив зависимостей, с помощью него мы можем определить жизненный цикл компонента
  // Если мы прокидываем пустой массив во 2м аргументе, то мы определяем 1ю фазу жизненного цикла - Mounting
  useEffect(() => {
    console.log("Mounting!!!");
  }, []);

  // ниже просто функция в компоненте, которая при изменении пропса или стейта - будет выполняться
  console.log("Render");

  // 2 Lifecycle phase - UPDATING
  useEffect(() => {
    console.log("Updating!!!");
  }, [SearchInputValue]);

   // 3 Lifecycle phase -  UNMOUNTING
   useEffect(()=> {
    console.log("Unmounting!!!")
   }, [])

  return (
    <Lesson_09_Wrapper>
      <InputControl>
        <Input
          id="search-input"
          label="Search"
          name="Search"
          placeholder="Enter item for search"
          value={SearchInputValue}
          onChange={onChangeInput}
        />
        {/* <input
          id="search-input"
          name="search"
          placeholder="Enter item for search"
          // value это значение самого инпута, т.е. то что пользователь вводит
          // onChange это функция которая срабатывает при вводе в инпут
          value={SearchInputValue}
          onChange={onChangeInput}
        /> */}
        <ButtonControl>
          <Button name="Search" onClick={onSearch} />
        </ButtonControl>
      </InputControl>
    </Lesson_09_Wrapper>
  );
}

export default Lesson_09;
