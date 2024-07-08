import { useState } from "react";

import Counter from "components/Counter/Counter";
import Button from "components/Button/Button"

import { WEATHER_CODE } from "./types";
import "./styles.css";

function Lesson_07() {
  //--------------------------------------------- 12. enum  ----------------------------------------------------------

  // Создайте функцию, которая бы принимала бы следующие параметры:
  //   код погоды и функция decode, которая дает расшифровку погоды по коду.
  //   Функция должна возвращать строку, описывающую погоду. Таблица соответствия
  //   код-описание: SQ – шквал PO – пыльный вихрь FC - торнадо BR – дымка
  //   (видимость от 1 до 9 км) HZ – мгла (видимость менее 10 км) FU – дым
  //   (видимость менее 10 км) DS - пыльная буря (видимость менее 10 км) SS -
  //   песчаная буря (видимость менее 10 км) Подсказка: удобно использовать в
  //   одном из методов switch-case:

  const decode = (weatherCode: WEATHER_CODE): string => {
    switch (weatherCode) {
      case WEATHER_CODE.SQ: {
        return "шквал";
      }
      case WEATHER_CODE.PO: {
        return "пыльный вихрь";
      }
      case WEATHER_CODE.FC: {
        return "торнадо";
      }
      case WEATHER_CODE.BR: {
        return "дымка (видимость от 1 до 9 км)";
      }
      case WEATHER_CODE.HZ: {
        return "мгла (видимость менее 10 км)";
      }
      case WEATHER_CODE.FU: {
        return "дым(видимость менее 10 км)";
      }
      case WEATHER_CODE.DS: {
        return "пыльная буря (видимость менее 10 км)";
      }
      case WEATHER_CODE.SS: {
        return "песчаная буря (видимость менее 10 км)";
      }
      default: {
        return "Wrong code";
      }
    }
  };

  const getWeather = (
    weatherCode: WEATHER_CODE,
    decodeFunc: (weatherCode: WEATHER_CODE) => string
  ) => {
    console.log(decodeFunc(weatherCode));
  };

  getWeather(WEATHER_CODE.SS, decode);
  getWeather(WEATHER_CODE.DS, decode);
  getWeather(WEATHER_CODE.SS, decode);

  //--------------------------------------------- 13. Generic  ----------------------------------------------------------
  type ArrayGenerator<ValueType> = ValueType[];

  const someStringsArray: ArrayGenerator<string> = ["a", "b", "c"];

  const numbers: ArrayGenerator<number> = [1, 2, 3, 4, 5];

  interface ValueForMac {
    model: string;
    articul: number;
  }

  interface ShopItems {
    type: string;
    value: string | number | ValueForMac;
  }

  const item1: ShopItems = {
    type: "TV",
    value: 123445,
  };

  const item2: ShopItems = {
    type: "PC",
    value: "Xiaomi",
  };

  const item3: ShopItems = {
    type: "PC",
    value: {
      model: "Apple Pro Book",
      articul: 13245445,
    },
  };

  // Можно прокидывать не только 1 дженерик аргумент, а сколько угодно через запятую
  interface GenericShopItems<ValueType> {
    type: string;
    value: ValueType;
  }

  const itemG1: GenericShopItems<number> = {
    type: "TV",
    value: 1235346245,
  };

  const itemG2: GenericShopItems<string> = {
    type: "PC",
    value: "Xiaomi Model 123",
  };
  const itemG3: GenericShopItems<ValueForMac> = {
    type: "PC",
    value: {
      model: "Apple Pro Book",
      articul: 1231241352345,
    },
  };

  // Создаем функцию для отправки текущего состояния Counter по нажатию на Button 
  
  const [count, setCount] = useState<number>(0);
  console.log(count);
  console.log(setCount);

  const onPlus = (): void => {
    setCount((prevValue: number) => {
      return prevValue + 1;
    });
  };

  const onMinus = (): void => { 
    setCount((prevValue: number) => {
      return prevValue - 1;
    });
  };

  const sendCountToServer = async() => {
    // const response = await fetch("someURL", {
    //   method: "POST",
    //   body: JSON.stringify({count: count}),
    // })
  }

  return (
    <div>
      <Counter count={count} onMinus={onMinus} onPlus={onPlus} />
      <Button name="Send Count" onClick={sendCountToServer} />
    </div>
  );
}

export default Lesson_07;
