import { MouseEvent } from "react";

type ButtonType = "button" | "submit" | "reset" | undefined;

export interface ButtonProps {
  imgSrc?: string | undefined;
  type?: ButtonType;
  name: string;
  onClick: (event: MouseEvent) => void;
}
