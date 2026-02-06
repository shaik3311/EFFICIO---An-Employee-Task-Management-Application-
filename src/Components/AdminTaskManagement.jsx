import React, { useState } from "react";
import Adminsidebar from "../Components/Adminsidebar";
import { Plus, X } from "lucide-react";

const AdminTasks = () => {
  const [open, setOpen] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const[task,setTask] = useState('');
  const[assign,setAssign] = useState('');
  const[description,setDescription] = useState('');

  const submitHandler = (e)=>{
    e.preventDefault();
    console.log(`new task:${task} is created and assigned for ${assign}`);
    setTask('');
    setAssign('');
    setDescription('');
  }

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Adminsidebar />

      {/* Main Content */}
      <div className="flex-1 ">
        {/* Header */}
        <div className="flex justify-between items-center px-4 sm:px-6 py-6 border-b bg-white">
          <h1 className="text-2xl sm:text-3xl font-semibold px-10">Manage Tasks</h1>

          <button
            onClick={() => setOpen(true)}
            className="flex items-center gap-2 bg-blue-600 text-white px-3 lg:px-4 py-2 rounded-lg hover:bg-blue-700 active:scale-95"
          >
            <Plus size={18} />
            Add Task
          </button>
        </div>

        {/* Task List */}
        <div className="p-4 sm:p-6 h-[89vh]">
          <div className="bg-white shadow-md rounded-lg overflow-scroll h-[85vh]">
            {/* Table Header (desktop) */}
            <div className="hidden md:flex bg-gray-100 px-4 py-3 font-medium sticky top-0">
              <span className="w-1/4">Task</span>
              <span className="w-1/4">Assigned To</span>
              <span className="w-1/4">Status</span>
              <span className="w-1/4 text-center">Actions</span>
            </div>

            {/* Task Row */}
            <div className="flex flex-col md:flex-row gap-4 md:gap-0 px-4 py-4 border-b">
              <div className="md:w-1/4">
                <p className="text-sm text-gray-500 md:hidden">Task</p>
                <p className="font-medium">UI Design</p>
              </div>

              <div className="md:w-1/4">
                <p className="text-sm text-gray-500 md:hidden">Assigned To</p>
                <p>Shaik</p>
              </div>

              <div className="md:w-1/4">
                <p className="text-sm text-gray-500 md:hidden ">Status</p>
                <span className="px-1 py-1 rounded-full bg-yellow-100 text-yellow-700 text-sm">
                  Pending
                </span>
              </div>

              <div className="md:w-1/4 flex gap-3 md:justify-center">
                <button
                 onClick={()=>{
                  setOpenEdit(true);
                 }}
                 className="px-4 py-2 bg-gray-200 rounded-lg text-sm hover:bg-gray-300">
                  Edit
                </button>
                <button className="px-4 py-2 bg-red-200 text-red-700 rounded-lg text-sm hover:bg-red-300">
                  Delete
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Add Task Modal */}
      {open && (
        <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50">
          <div className="bg-white w-[90%] sm:w-[420px] rounded-lg p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">Add New Task</h2>
              <button onClick={() => setOpen(false)}>
                <X />
              </button>
            </div>

            <form
              onSubmit={(e)=>{
                  submitHandler(e);
                }
              }
             className="flex flex-col gap-4">
              <input
                type="text"
                value={task}
                onChange={(e)=>{
                  setTask(e.target.value);
                }}
                placeholder="Task Title"
                className="border px-4 py-2 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
              />

              <select
              value={assign}
              onChange={(e)=>{
                setAssign(e.target.value);
              }}
              className="border px-4 py-2 rounded-lg outline-none">
                <option>Assign to Employee</option>
                <option>Shaik</option>
                <option>Rahul</option>
              </select>

              <textarea
                value={description}
                onChange={(e)=>{
                  setDescription(e.target.value);
                }}
                placeholder="Task Description"
                rows="3"
                className="border px-4 py-2 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
              />

              <button
                type="submit"
                className="bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 active:scale-95"
              >
                Create Task
              </button>
            </form>
          </div>
        </div>
      )}

      {openEdit && (
        <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50">
          <div className="bg-white w-[90%] sm:w-[420px] rounded-lg p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">Add New Task</h2>
              <button onClick={() => setOpenEdit(false)}>
                <X />
              </button>
            </div>

            <form
              onSubmit={(e)=>{
                  submitHandler(e);
                }
              }
             className="flex flex-col gap-4">
              <input
                type="text"
                value={task}
                onChange={(e)=>{
                  setTask(e.target.value);
                }}
                placeholder="Task Title"
                className="border px-4 py-2 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
              />

              <select
              value={assign}
              onChange={(e)=>{
                setAssign(e.target.value);
              }}
              className="border px-4 py-2 rounded-lg outline-none">
                <option>Assign to Employee</option>
                <option>Shaik</option>
                <option>Rahul</option>
              </select>
              <select
              value={assign}
              onChange={(e)=>{
                setAssign(e.target.value);
              }}
              className="border px-4 py-2 rounded-lg outline-none">
                <option>Status of the task</option>
                <option>Pending</option>
                <option>In Progress</option>
                <option>Completed</option>
              </select>

              <textarea
                value={description}
                onChange={(e)=>{
                  setDescription(e.target.value);
                }}
                placeholder="Task Description"
                rows="3"
                className="border px-4 py-2 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
              />

              <button
                type="submit"
                className="bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 active:scale-95"
              >
                Edit Task
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminTasks;
