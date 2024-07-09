import { StyledButton, StyledImgButton } from "./styles";
import { ButtonProps } from "./types";

function Button({
  isDisabled = false,
  isRed = false,
  imgSrc,
  type = "button",
  name = "Send",
  onClick,
}: ButtonProps) {
  return (
    <StyledButton disabled={isDisabled} $isRed={isRed} onClick={onClick} type={type}>
      {/* Если imgSrc === true, то правая часть после && показывается на странице
      Если imgSrc === false, то правая часть после && скрывается */}
      {imgSrc && <StyledImgButton src={imgSrc} />}
      {!imgSrc && name}
      
    </StyledButton>
  );
}

export default Button;
