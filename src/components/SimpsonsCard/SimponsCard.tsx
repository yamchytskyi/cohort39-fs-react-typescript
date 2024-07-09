import "./styles.css";
import { SimpsonsCardProps } from "./types";

// Комаоненты, как и обычные функции могут принимать аргументы
// Но может принимать в себя только 1 аргумент - это ОБЬЕКТ!!!
// Этот объект называется props
// По умолчанию props - пустой объект, если вы в него ничего не передаете

function SimponsCard({ userData }: SimpsonsCardProps) {
  const { avatar, firstName, lastName, job, hobby } = userData;

  return (
    <div className="card-wrapper">
      <img className="avatar" src={avatar} alt="Avatar" />
      <p className="card-item">Full name: {`${firstName} ${lastName}`}</p>
      <p className="card-item">Job: {job}</p>
      <p className="card-item">Hobby: {hobby}</p>
    </div>
  );
}

export default SimponsCard;
