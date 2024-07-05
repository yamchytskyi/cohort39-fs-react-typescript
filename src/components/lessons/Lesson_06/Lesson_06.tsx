import "./styles.css";

function Lesson_06() {
  //--------------------------------------------------------- ТИПЫ ДАННЫХ ---------------------------------------------------------
  //---------------------------------------------------------- 1. string ---------------------------------------------
  let userFullName: string = "John Malcovich";
  let hello = `Hello, ${userFullName}`;

  //---------------------------------------------------------- 2. number ---------------------------------------------
  let number1: number = 100;
  let number2 = 200;
  let number3 = 3.33;
  let number4 = number1 / 0;
  // console.log(number4) = infinity
  // console.log(number4 === Infinity) = true

  //---------------------------------------------------------- 3. boolean ---------------------------------------------
  let isActive: boolean = true;

  //----------------------------------------------------------  4. arrays ---------------------------------------------
  const animals: string[] = ["Tiger", "Dog"];
  animals.push("Cat");
  const numbers: number[] = [1, 2, 3, 4, 5];

  //---------------------------------------------------------- 5. - tupel - задаем длинну массива и типы данных в нем ---------
  const userArray: [string, string, string, number] = [
    "name",
    "John",
    "age",
    30,
  ];

  //---------------------------------------------------------- 6.1 functions void ---------------------------------------------
  // - выполняемая функция - void:
  const sayHi = (personName: string): void => {
    console.log(`Hello, ${personName}`);
  };
  // первый способ указать что функция ничего не возвращает:
  const makeAlert1 = (): void => {
    alert("This is React Typescript app");
  };
  // второй способ указать что функция ничего не возвращает:
  const makeAlert2: () => void = () => {
    alert("This is React Typescript app");
  };

  //---------------------------------------------------------- 6.2 functions return ---------------------------------------------
  const add = (a: number, b: number): number => {
    return a + b;
  };

  sayHi(userFullName);
  return <div></div>;
}

//---------------------------------------------------------- 7 objects - interfaces ---------------------------------------------
interface Admin {
  isAdmin: boolean;
}

// необязательные поля отмечаются знаком вопроса (user2)
interface UserAnimal {
  pet?: string;
}

// наследование обьектов
interface User extends Admin, UserAnimal {
  firstName: string;
  lastName: string;
  age: number;
  job: string;
  //isAdmin: boolean,
}

// расширение интерфейсов
interface User {
  isFamily: boolean;
}

const user1: User = {
  firstName: "James",
  lastName: "Hetfield",
  age: 25,
  job: "QA",
  isAdmin: true,
  pet: "Dog",
  isFamily: false,
};

// необязательные поля отмечаются знаком вопроса (UserAnimal)
const user2: User = {
  firstName: "Kirk",
  lastName: "Hammet",
  age: 30,
  job: "FrontEnd",
  isAdmin: false,
  isFamily: true,
};

//--------------------------------------------- 8. undefined  ----------------------------------------------------------
let userDate: undefined = undefined;

//--------------------------------------------- 9. null  ---------------------------------------------------------------
let emptyVar: null = null;

//--------------------------------------------- 10. any  --------------------------------------------------------------
let someVariable: any = "Some string";
someVariable = 1000;

//--------------------------------------------- 11. type  ----------------------------------------------------------
type UserDataFromServer = User | undefined | null;
let userDataFromServer: UserDataFromServer = user1;
userDataFromServer = null;
userDataFromServer = undefined;
// userDataFromServer = 100 - error

// типизация обьектов:
type isAnimalProps = {
  isAnimal: boolean;
};

// в type нет наследования
// type Animal extends GlobalAnimalProps = {    - error
//     type: string;
//     age: number;
//     color: string;
//     isWild: boolean;
// }

type Animal = {
  type: string;
  age: number;
  color: string;
  isWild: boolean;
};

// в type нет расширения
// type Animal  = {
//     speed: number;                           - error
// }

// как взять онин или другой тип?
// создать промежуточный тип:

type isAnimalOrAnimalOrAndAnimal = isAnimalProps | Animal;
type isAnimalAndAnimal = isAnimalProps & Animal;

const animal1: Animal = {
  type: "Tiger",
  age: 12,
  color: "orange",
  isWild: true,
};

const animal2: isAnimalOrAnimalOrAndAnimal = {
  type: "Lion",
  age: 12,
  color: "yellow",
  isWild: true,
  isAnimal: true,
};

const animal3: isAnimalOrAnimalOrAndAnimal = {
  isAnimal: true,
};

const animal4: isAnimalAndAnimal = {
  type: "Cat",
  age: 3,
  color: "black",
  isWild: false,
  isAnimal: true,
};

export default Lesson_06;
