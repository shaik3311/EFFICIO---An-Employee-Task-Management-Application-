import React,{useContext, useEffect, useState} from 'react'
import Employeesidebar from './Employeesidebar'
import { Plus, X } from "lucide-react";
import { DataContext } from '../Context/DataProvider';


const EmployeeTasks = () => {
    const{allTasks,loggedInUser,replaceTask} = useContext(DataContext);
      const[openEdit, setOpenEdit] = useState(false);
      const[employeeTasks,setEmployeeTasks] = useState([]);
      const[selectedTask,setSelectedTask] = useState({});
      const[newUpdate,setNewUpdate] = useState('');

  // load employee task 
  useEffect(()=>{
        let tasks = [];
        for(let i=0;i<allTasks.length;i++){
          if(allTasks[i].task_assigned_to == loggedInUser.userName){
            tasks.push(allTasks[i]);
          }
        }
        setEmployeeTasks(tasks);
    },[allTasks]);
    
    
  // Handle employee task status update 
  const updateHandler = (e)=>{
    e.preventDefault();
    // console.log(selectedTask);

    const newTask = {
      task_id : selectedTask.task_id,
      task_title : selectedTask.task_title,
      task_assigned_to: selectedTask.task_assigned_to,
      task_assigned_by: selectedTask.task_assigned_by,
      task_description : selectedTask.task_description,
      task_status : newUpdate
    }
    replaceTask(selectedTask.task_id,newTask);
    setOpenEdit(false);
    setSelectedTask({});
  }

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
      <Employeesidebar />

      {/* Main Content */}
      <div className="flex-1 ">
        {/* Header */}
        <div className="flex justify-between items-center px-4 sm:px-6 py-6 border-b bg-white">
          <h1 className="text-2xl sm:text-3xl font-semibold px-15 lg:px-2">Manage Tasks</h1>
        </div>

        {/* Task List */}
        <div className="p-4 sm:p-6 h-[84vh]">
          <div className="bg-white shadow-md rounded-lg overflow-scroll h-[84vh]">
            {/* Table Header (desktop) */}
            <div className="hidden md:flex bg-gray-100 px-4 py-3 font-medium sticky top-0">
              <span className="w-1/4">Task</span>
              <span className="w-1/4">Assigned By</span>
              <span className="w-1/4">Status</span>
              <span className="w-1/4 text-center">Actions</span>
            </div>

            {/* Task Row */}
            {employeeTasks.map((task,idx)=>{
              return <div key={idx} className="flex flex-col md:flex-row gap-4 md:gap-0 px-4 py-4 border-b">
              <div className="md:w-1/4">
                <p className="text-sm text-gray-500 md:hidden">Task</p>
                <p className="font-medium">{task.task_title}</p>
              </div>

              <div className="md:w-1/4">
                <p className="text-sm text-gray-500 md:hidden">Assigned By</p>
                <p>{task.task_assigned_by}</p>
              </div>

              <div className="md:w-1/4">
                <p className="text-sm text-gray-500 md:hidden ">Status</p>
                <span className={`px-1 py-1 rounded-full text-sm ${getStatusClasses(task.task_status)}`}>
                  {task.task_status}
                </span>
              </div>

              <div className="md:w-1/4 flex gap-3 md:justify-center">
                <button
                 onClick={(e)=>{
                  setOpenEdit(true);
                  setSelectedTask(task);
                  setNewUpdate(task.task_status);
                 }}
                 className="px-4 py-2 bg-gray-200 rounded-lg text-sm hover:bg-gray-300">
                  Update
                </button>
              </div>
            </div>
            })}
            
          </div>
        </div>
      </div>

      {openEdit && (
        <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50">
          <div className="bg-white w-[90%] sm:w-[420px] rounded-lg p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">Update Task Status</h2>
              <button onClick={() => {
                setOpenEdit(false);
                setSelectedTask({});
              }}>
                <X />
              </button>
            </div>

            <form
              onSubmit={(e)=>{
                  updateHandler(e);
                }
              }
             className="flex flex-col gap-4">
              <select
              value={newUpdate}
              onChange={(e)=>{
                setNewUpdate(e.target.value)
              }}
              className="border px-4 py-2 rounded-lg outline-none">
                <option>Status of the task</option>
                <option>Pending</option>
                <option>Inprogress</option>
                <option>Completed</option>
              </select>

              <button
                type="submit"
                className="bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 active:scale-95"
              >
                Update Status
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}

export default EmployeeTasks