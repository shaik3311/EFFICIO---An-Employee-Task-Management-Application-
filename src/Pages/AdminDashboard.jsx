import React from "react";
import Adminsidebar from "../Components/Adminsidebar";

const AdminDashboard = () => {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <Adminsidebar />

      {/* Main Content */}
      <div className="flex-1">
        {/* Header */}
        <h1 className="text-2xl sm:text-3xl lg:text-4xl px-20 lg:px-5 py-5 border-b font-semibold bg-white sticky top-0 z-10">
          Admin Dashboard
        </h1>

        {/* Page Content */}
        <div className="p-4 sm:p-6">
          <h1 className="text-2xl sm:text-3xl font-semibold mt-2">
            Welcome, Admin!
          </h1>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-8">
            <div className="h-24 bg-blue-500 flex justify-between items-center px-5 rounded-lg text-white">
              <h1 className="text-lg font-medium">Total Tasks</h1>
              <h1 className="text-4xl font-bold">15</h1>
            </div>

            <div className="h-24 bg-orange-500 flex justify-between items-center px-5 rounded-lg text-white">
              <h1 className="text-lg font-medium">Pending Tasks</h1>
              <h1 className="text-4xl font-bold">5</h1>
            </div>

            <div className="h-24 bg-green-500 flex justify-between items-center px-5 rounded-lg text-white">
              <h1 className="text-lg font-medium">Completed Tasks</h1>
              <h1 className="text-4xl font-bold">10</h1>
            </div>
          </div>

          {/* Assigned Tasks */}
          <div className="bg-white shadow-md rounded-lg mt-10 overflow-hidden">
            <h1 className="text-xl sm:text-2xl font-semibold px-4 py-4 border-b">
              Recently Assigned Tasks
            </h1>

            {/* Table Header (Desktop only) */}
            <div className="hidden md:flex bg-gray-100 px-4 py-3 font-medium">
              <span className="w-1/4">Task</span>
              <span className="w-1/4">Assigned To</span>
              <span className="w-1/4 px-3">Status</span>
              <span className="w-1/4 text-center">Actions</span>
            </div>

            {/* Row */}
            <div className="flex flex-col lg:items-center md:flex-row gap-4 md:gap-0 px-4 py-4 border-b">
              <div className="md:w-1/4">
                <p className="text-sm text-gray-500 md:hidden">Task</p>
                <p className="font-medium">UI Design</p>
              </div>

              <div className="md:w-1/4">
                <p className="text-sm text-gray-500 md:hidden">Assigned To</p>
                <p>Shaik</p>
              </div>

              <div className="md:w-1/4">
                <p className="text-sm text-gray-500 md:hidden">Status</p>
                <span className="px-3 py-1 rounded-full bg-yellow-100 text-yellow-700 text-sm">
                  Pending
                </span>
              </div>

              <div className="md:w-1/4 flex gap-3 md:justify-center">
                <button className="px-4 py-2 bg-gray-200 rounded-lg text-sm hover:bg-gray-300 active:scale-95">
                  Edit
                </button>
                <button className="px-4 py-2 bg-red-200 text-red-700 rounded-lg text-sm hover:bg-red-300 active:scale-95">
                  Delete
                </button>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
