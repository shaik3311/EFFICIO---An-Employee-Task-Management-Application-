import React, { useState } from "react";
import Adminsidebar from "../Components/Adminsidebar";
import { User, Briefcase, ClipboardList } from "lucide-react";
// import EmployeeTasksPopup from "./EmployeeTasksPopup";

const AdminEmployeesOverview = () => {
  const[openView,setOpenView] = useState(false);
  // temporary mock data (later replace with context / api)
  const employees = [
    {
      id: 1,
      name: "Shaik",
      role: "UI Developer",
      totalProjects: 5,
    },
    {
      id: 2,
      name: "Rahul",
      role: "Backend Developer",
      totalProjects: 3,
    },
    {
      id: 3,
      name: "Ayesha",
      role: "QA Engineer",
      totalProjects: 7,
    },
    {
      id: 3,
      name: "Ayesha",
      role: "QA Engineer",
      totalProjects: 7,
    },
    {
      id: 3,
      name: "Ayesha",
      role: "QA Engineer",
      totalProjects: 7,
    },
    {
      id: 3,
      name: "Ayesha",
      role: "QA Engineer",
      totalProjects: 7,
    },
    {
      id: 3,
      name: "Ayesha",
      role: "QA Engineer",
      totalProjects: 7,
    },
    {
      id: 3,
      name: "Ayesha",
      role: "QA Engineer",
      totalProjects: 7,
    },
    {
      id: 3,
      name: "Ayesha",
      role: "QA Engineer",
      totalProjects: 7,
    },
    {
      id: 3,
      name: "Ayesha",
      role: "QA Engineer",
      totalProjects: 7,
    },
    {
      id: 3,
      name: "Ayesha",
      role: "QA Engineer",
      totalProjects: 7,
    },
    {
      id: 3,
      name: "Ayesha",
      role: "QA Engineer",
      totalProjects: 7,
    },
  ];

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Adminsidebar />

      {/* Main Content */}
      <div className="flex-1 h-[98vh]">
        {/* Header */}
        <div className="px-4 sm:px-8 py-5 border-b bg-white h-[15vh]">
          <h1 className="text-2xl sm:text-3xl font-semibold not-lg:px-12">
            Employees Overview
          </h1>
          <p className="text-gray-500 mt-1">
            View employees and their assigned projects
          </p>
        </div>

        {/* Employees Table */}
        <div className="p-4 sm:p-6 h-[85vh] ">
          <div className="bg-white shadow-md h-[80vh] rounded-lg overflow-scroll">
            {/* Table Header (Desktop) */}
            <div className="hidden md:grid grid-cols-5 bg-gray-100 px-4 py-3 font-medium sticky top-0">
              <span>Employee</span>
              <span>Completed</span>
              <span>Pending</span>
              <span>In Progress</span>
              <span>Total Projects</span>
            </div>

            {/* Employee Row */}
            {employees.map((emp) => (
              <div
                key={emp.id}
                className="grid grid-cols-1 md:grid-cols-5 gap-4 px-4 py-4 border-b"
              >
                {/* Employee */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                    <User className="text-blue-600" />
                  </div>
                  <p className="font-medium">{emp.name}</p>
                </div>

                {/* completed */}
                <div>
                  <p className="text-sm text-gray-500 md:hidden">Completed</p>
                  <div className="flex items-center gap-2">
                    <ClipboardList size={16} />
                    5
                  </div>
                </div>
                {/* Pending  */}
                <div>
                  <p className="text-sm text-gray-500 md:hidden">Pending</p>
                  <div className="flex items-center gap-2">
                    <ClipboardList size={16} />
                    5
                  </div>
                </div>
                {/* In Progress  */}
                <div>
                  <p className="text-sm text-gray-500 md:hidden">In Progress</p>
                  <div className="flex items-center gap-2">
                    <ClipboardList size={16} />
                    5
                  </div>
                </div>

                {/* Total Projects */}
                <div>
                  <p className="text-sm text-gray-500 md:hidden">
                    Total Projects
                  </p>
                  <div className="flex items-center gap-2 font-semibold">
                    <ClipboardList size={16} />
                    {emp.totalProjects}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminEmployeesOverview;
