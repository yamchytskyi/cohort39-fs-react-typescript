import './styles.css';
import { InputPromise} from "./types"


function Input({ id, name, type, placeholder, label }: InputPromise) {
  return (
    <div className='input-wrapper'>
      <label className='input-label' htmlFor={id}>{label}</label>
      <input className='input-component' id={id} name={name} type={type} placeholder={placeholder} />
    </div>
  );
}

export default Input;