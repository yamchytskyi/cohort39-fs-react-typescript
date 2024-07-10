import Button from "components/Button/Button";
import { Lesson08Wrapper, ButtonControl, Box1, Box2, Box3 } from "./styles";

function Lesson_08() {
  let isBlack = false;
  return (
    <Lesson08Wrapper>
      <h1 style={{ color: isBlack ? "black" : "red" }}>Lesson 08</h1>
      <ButtonControl>
        <Button disabled={true} isRed={false} name="Send" onClick={() => {
          console.log("This button is enabled")
        }} />
      </ButtonControl>
      <Box1>Box1</Box1>
      <Box2>Box2</Box2>
      <Box3>Box3</Box3>
    </Lesson08Wrapper>
  );
}

export default Lesson_08;
