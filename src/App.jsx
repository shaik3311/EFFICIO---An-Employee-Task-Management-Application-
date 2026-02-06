import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Home from './Pages/Home'
import Login from './Pages/Login'
import Signup from './Pages/Signup'
import AdminDashboard from './Pages/AdminDashboard'
import AdminTaskManagement from './Components/AdminTaskManagement'
import AdminEmployeeManagement from './Components/AdminEmployeeManagement'
import EmployeeDashboard from './Pages/EmployeeDashboard'
import EmployeeTasks from './Components/EmployeeTasks'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/admin' element={<AdminDashboard/>}/>
        <Route path='/admin-tasks' element={<AdminTaskManagement/>}/>
        <Route path='/admin-employees' element={<AdminEmployeeManagement/>}/>
        <Route path='/employee' element={<EmployeeDashboard/>}/>
        <Route path='/employee-tasks' element={<EmployeeTasks/>}/>
      </Routes>
    </div>
  )
}

export default App