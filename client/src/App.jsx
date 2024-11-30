import React from "react"
import { Routes, Route } from "react-router-dom"
import Login from "./pages/Login"
import EmployeeDashboard from "./pages/employeeDashboard"
import AdminDashboard from "./pages/AdminDashboard"
import DepartmentsView from "./components/DepartmentsView"
import EmployeeView from "./components/EmployeeView"
import EditEmployee from "./components/EditEmployee"

function App() {

  return (
    <Routes>
      <Route path="/" Component={Login} />
      <Route path="/employeedashboard" Component={EmployeeDashboard} />
      <Route path="/admindashboard" Component={AdminDashboard} />
      <Route path="/admindashboard/departments" Component={DepartmentsView} />
      <Route path="/admindashboard/employee" Component={EmployeeView} />
      <Route path="/admindashboard/employee/editemployee" Component={EditEmployee} />
    </Routes>
  )
}

export default App
