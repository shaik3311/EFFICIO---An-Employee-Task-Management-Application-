import React, { useState,useEffect, useContext } from 'react'
import Employeesidebar from '../Components/Employeesidebar'
import { DataContext } from '../Context/DataProvider'

const EmployeeDashboard = () => {

  const{loggedInUser,allTasks} = useContext(DataContext);
  const[recentTasks,setRecentTasks] = useState([]);
  const[totalTasks,setTotalTasks] = useState(0);
  const[pendingTasks,setPendingTasks] = useState(0);
  const[completedTasks,setCompletedTasks] = useState(0);

  useEffect(()=>{
      let total = 0;
      let pending = 0;
      let completed  = 0;
      let newRecentTasks = [];
      for(let i=0;i<allTasks.length;i++){
        if(allTasks[i].task_assigned_to == loggedInUser.userName){
          newRecentTasks.push(allTasks[i]);
          total++;
          if(allTasks[i].task_status == 'Completed'){
            completed++;
          }else{
            pending++;
          }
        }
      }
      setRecentTasks(newRecentTasks);
      setTotalTasks(total);
      setPendingTasks(pending);
      setCompletedTasks(completed);
  },[allTasks]);

  const getStatusClasses = (status) => {
    switch (status) {
      case "Pending":
        return "bg-orange-100 text-orange-700";
      case "Inprogress":
        return "bg-yellow-100 text-yellow-700";
      case "Completed":
        return "bg-green-100 text-green-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Employeesidebar/>

      {/* Main Content */}
      <div className="flex-1">
        {/* Header */}
        <h1 className="text-2xl sm:text-3xl lg:text-4xl px-20 lg:px-5 py-5 border-b font-semibold bg-white sticky top-0 z-10">
          Employee Dashboard
        </h1>

        {/* Page Content */}
        <div className="p-4 sm:p-6">
          <h1 className="text-2xl sm:text-3xl font-semibold mt-2">
            Welcome, {loggedInUser.userName}!
          </h1>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-8">
            <div className="h-24 bg-blue-500 flex justify-between items-center px-5 rounded-lg text-white">
              <h1 className="text-lg font-medium">Total Tasks</h1>
              <h1 className="text-4xl font-bold">{totalTasks}</h1>
            </div>

            <div className="h-24 bg-orange-500 flex justify-between items-center px-5 rounded-lg text-white">
              <h1 className="text-lg font-medium">Pending Tasks</h1>
              <h1 className="text-4xl font-bold">{pendingTasks}</h1>
            </div>

            <div className="h-24 bg-green-500 flex justify-between items-center px-5 rounded-lg text-white">
              <h1 className="text-lg font-medium">Completed Tasks</h1>
              <h1 className="text-4xl font-bold">{completedTasks}</h1>
            </div>
          </div>

          {/* Assigned Tasks */}
          <div className="bg-white shadow-md rounded-lg mt-10 overflow-hidden">
            <h1 className="text-xl sm:text-2xl font-semibold px-4 py-4 border-b">
              Tasks
            </h1>

            {/* Table Header (Desktop only) */}
            <div className="hidden md:flex bg-gray-100 px-4 py-3 font-medium">
              <span className="w-1/3">Task</span>
              <span className="w-1/3">Assigned By</span>
              <span className="w-1/3 px-3">Status</span>
            </div>

            {/* Row */}
            {recentTasks.map((task)=>{
              return <div className="flex flex-col lg:items-center md:flex-row gap-4 md:gap-0 px-4 py-4 border-b">
              <div className="md:w-1/3">
                <p className="text-sm text-gray-500 md:hidden">Task</p>
                <p className="font-medium">{task.task_title}</p>
              </div>

              <div className="md:w-1/3">
                <p className="text-sm text-gray-500 md:hidden">Assigned By</p>
                <p>{task.task_assigned_by}</p>
              </div>

              <div className="md:w-1/3">
                <p className="text-sm text-gray-500 md:hidden">Status</p>
                <span className={`px-3 py-1 rounded-full text-sm ${getStatusClasses(task.task_status)}`}>
                  {task.task_status}
                </span>
              </div>
            </div>
            })}
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default EmployeeDashboard