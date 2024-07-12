import {
  StyledInputWrapper,
  StyledInputLabel,
  StyledInputComponent,
} from "./styles";
import { InputPromise } from "./types";

function Input({ id, name, type, placeholder, label }: InputPromise) {
  return (
    <StyledInputWrapper>
      <StyledInputLabel htmlFor={id}>{label}</StyledInputLabel>
      <StyledInputComponent
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
      />
    </StyledInputWrapper>
  );
}

export default Input;
