import {
  StyledInputWrapper,
  StyledInputLabel,
  StyledInputComponent,
  ErrorContainer
} from "./styles";

import { InputPromise } from "./types";

function Input({
  id,
  name,
  type,
  placeholder,
  label,
  value,
  onChange,
  error,
}: InputPromise) {
  return (
    <StyledInputWrapper>
      <StyledInputLabel htmlFor={id}>{label}</StyledInputLabel>
      <StyledInputComponent
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        $error={error}
      />
      {!!error && <ErrorContainer>{error}</ErrorContainer>}
    </StyledInputWrapper>
  );
}

export default Input;
