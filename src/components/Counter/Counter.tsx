import Button from "components/Button/Button";

import {StyledCounter, StyledCount} from "./styles"

interface CounterProps {
  count: number;
  onPlus: () => void;
  onMinus: () => void;
}

function Counter( {count, onPlus, onMinus}: CounterProps) {

  return (
    <StyledCounter>
      <div className="button-control">
        <Button name="-" onClick={onMinus} />
      </div>
      <StyledCount>{count} </StyledCount>
      <div className="button-control">
        <Button name="+" onClick={onPlus} />
      </div>
    </StyledCounter>
  );

}

export default Counter;
