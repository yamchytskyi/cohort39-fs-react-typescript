import { HTMLInputTypeAttribute, ChangeEvent } from "react";

export interface InputPromise {
    id: string | undefined;
    name: string;
    type?: HTMLInputTypeAttribute;
    placeholder?: string;
    label: string;
    // поля ниже должны быть обязательными
    value?: string;
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  }
  