import "./styles.css";

function Homework_06() {
  // В нем нужно протипизировать следующий массив обьектов:
  const cars = [
    { brand: "BMW", price: 20000, isDiesel: true },
    { brand: "Mercedes", price: 22000, isDiesel: false },
    { brand: "Porshe", price: 50000, isDiesel: true },
    { brand: "Nissan", price: 25000, isDiesel: false },
    { brand: "Audi", price: 50000, isDiesel: true },
  ];

  type Car = {
    brand: string;
    price: number;
    isDiesel: boolean;
  };

  const typedCars: Car[] = cars.map(({ brand, price, isDiesel }) => {
    return {
      brand,
      price,
      isDiesel,
    };
  });

  // Используя map JSX элементов, расположите данные из обьектов в карточках и покажите эти карточки на странице.
  //  Стили на ваше усмотрение

  const carsCards = typedCars.map((car) => {
    return (<div className="car-card">
      <p>Brand: {car.brand}</p>
      <p>Price: {car.price}</p>
      <p>Fuel type: {car.isDiesel ? "Diesel" : "Gas"}</p>
    </div>)
  })
  return <div className="cars-container">{carsCards}</div>;
}

export default Homework_06;
