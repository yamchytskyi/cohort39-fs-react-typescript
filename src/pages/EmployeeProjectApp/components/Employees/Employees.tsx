import { useContext } from "react"

import {InfoAboutEmployee} from "pages/EmployeeProjectApp/components/LayoutEmployee/LayoutEmployee"
import {LayoutEmployeeContextData} from "pages/EmployeeProjectApp/components/LayoutEmployee/types"

import { EmployeeProps } from "./types"



function Employees() {

  const dataFromCreateEmployee = useContext<LayoutEmployeeContextData>(InfoAboutEmployee)

  return (
    <div><p>{dataFromCreateEmployee.employeeData?.name}</p></div>
  )
}

export default Employees