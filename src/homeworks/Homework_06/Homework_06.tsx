import "./styles.css";
import {v4} from "uuid";
import { ReactNode } from "react";
import {Car} from "./types"

function Homework_06() {
  // В нем нужно протипизировать следующий массив обьектов:
  const cars: Car[] = [
    { brand: "BMW", price: 20000, isDiesel: true },
    { brand: "Mercedes", price: 22000, isDiesel: false },
    { brand: "Porshe", price: 50000, isDiesel: true },
    { brand: "Nissan", price: 25000, isDiesel: false },
    { brand: "Audi", price: 50000, isDiesel: true },
  ];

  // Используя map JSX элементов, расположите данные из обьектов в карточках и покажите эти карточки на странице.
  //  Стили на ваше усмотрение

  // типизируем ReactNode типизируем ВСЁ!
  const carsCards: ReactNode[] = cars.map((carObj: Car) => {
    return (<div className="car-card" key={v4()}>
      <p>Brand: {carObj.brand}</p>
      <p>Price: {carObj.price}$</p>
      <p>Fuel type: {carObj.isDiesel ? "Diesel" : "Gas"}</p>
    </div>)
  })
  return <div className="cars-container">{carsCards}</div>;
}

export default Homework_06;
