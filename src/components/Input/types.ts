import { HTMLInputTypeAttribute, ChangeEvent } from "react";

export interface InputPromise {
    id: string | undefined;
    name: string;
    type?: HTMLInputTypeAttribute;
    placeholder?: string;
    label: string;
    error?: string | undefined;
    // поля ниже должны быть обязательными
    value?: string;
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  }
  