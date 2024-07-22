import { ReactNode } from "react";

import {EMPLOYEE_FORM_NAMES} from "pages/EmployeeProjectApp/components/CreateEmployee/types"

export interface LayoutProps {
  children: ReactNode;
}

export interface EmployeeData {
  [EMPLOYEE_FORM_NAMES.NAME]: string,
  [EMPLOYEE_FORM_NAMES.SURNAME]: string,
  [EMPLOYEE_FORM_NAMES.AGE]: string,
  [EMPLOYEE_FORM_NAMES.JOB_POSITION]: string
}

export enum APP_ROUTES {
  HOME = "/",
  CREATE_EMPLOYEE = "/createEmployee",
  EMPLOYEE = "/employee",
}

export interface LayoutEmployeeContextData {
  employeeData: undefined | EmployeeData,
  setEmployeeData: any,
}