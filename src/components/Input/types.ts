import { HTMLInputTypeAttribute } from "react";

export interface InputPromise {
    id: string | undefined;
    name: string;
    type: HTMLInputTypeAttribute;
    placeholder?: string;
    label: string;
  }
  