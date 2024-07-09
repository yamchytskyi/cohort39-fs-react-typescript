import { MouseEvent } from "react";

type ButtonType = "button" | "submit" | "reset" | undefined;

export interface ButtonProps {
  isRed?: boolean;
  imgSrc?: string | undefined;
  type?: ButtonType;
  name: string;
  onClick: (event: MouseEvent) => void;
  isDisabled?: boolean;
}
