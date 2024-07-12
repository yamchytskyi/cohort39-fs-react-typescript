import styled from "@emotion/styled";

export const StyledInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;
export const StyledInputLabel = styled.label`
  font-size: 16px;
  color: hsl(0, 0%, 44%);
`;
export const StyledInputComponent = styled.input`
  width: 100%;
  height: 50px;
  border: 1px solid #3f3f3f;
  border-radius: 4px;
  padding: 12px;
  outline: none;

  ::placeholder {
    color: #6f6f6f;
    font-size: 16px;
  }
`;
