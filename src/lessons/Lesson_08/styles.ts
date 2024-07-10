import styled from "@emotion/styled";

// создаем унифицированные свойства
import { css } from "@emotion/react";

const commonBoxStyles = css`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 300px;
  height: 300px;
  /* background-color: blue; */
  padding: 30px;
  border: 2px solid black;
  border-radius: 50%;

  color: white;
  font-size: 30px;
  font-weight: bold;
`;

export const Lesson08Wrapper = styled("div")`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 100px;
  gap: 40px;
`;

export const ButtonControl = styled("div")`
  width: 300px;
`;

export const Box1 = styled("div")`
${commonBoxStyles};
  background-color: green;
`;
export const Box2 = styled("div")`
${commonBoxStyles};
  background-color: yellow;
`;
export const Box3 = styled("div")`
${commonBoxStyles};
  background-color: red;
`;
