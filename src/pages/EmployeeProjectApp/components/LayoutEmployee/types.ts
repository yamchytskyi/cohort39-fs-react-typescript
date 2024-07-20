import { ReactNode } from "react";

export interface LayoutProps {
  children: ReactNode;
}

export interface EmployeeData {
  name: string,
  surname: string,
  age: string,
  jobPosition: string
}

export interface LayoutEmployeeContextData {
  employeeData: undefined | EmployeeData,
  setEmployeeData: any,
}