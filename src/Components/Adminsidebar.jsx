import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  ClipboardList,
  Users,
  LogOut,
  Menu,
  X,
} from "lucide-react";

const AdminSidebar = () => {
  const [open, setOpen] = useState(false);

  const linkStyle = ({ isActive }) =>
    `flex items-center gap-3 px-4 py-3 rounded-lg text-lg transition-all
     ${
       isActive
         ? "bg-white text-blue-600 font-semibold"
         : "text-white hover:bg-blue-500/40"
     }`;

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        className="md:hidden fixed top-4 left-4 z-50 bg-blue-600 p-2 rounded-lg text-white"
        onClick={() => setOpen(true)}
      >
        <Menu />
      </button>

      {/* Sidebar */}
      <aside
        className={`fixed md:static top-0 left-0 h-screen w-[260px] bg-blue-600
        flex flex-col justify-between px-4 py-6 z-50
        transform transition-transform duration-300
        ${open ? "translate-x-0" : "-translate-x-full md:translate-x-0"}`}
      >
        {/* Top */}
        <div className="flex flex-col gap-10">
          {/* Logo */}
          <div className="flex items-center justify-between pb-4">
            <div className="flex items-center gap-3">
              <img src="/Logo.png" alt="logo" className="w-10" />
              <h1 className="text-3xl font-bold text-white">EFFICIO</h1>
            </div>

            {/* Close (mobile) */}
            <button
              className="md:hidden text-white"
              onClick={() => setOpen(false)}
            >
              <X />
            </button>
          </div>

          {/* Links */}
          <nav className="flex flex-col gap-3">
            <NavLink to="/admin" className={linkStyle}>
              <LayoutDashboard size={22} />
              Dashboard
            </NavLink>

            <NavLink to="/admin-tasks" className={linkStyle}>
              <ClipboardList size={22} />
              Manage Tasks
            </NavLink>

            <NavLink to="/admin-employees" className={linkStyle}>
              <Users size={22} />
              Employees
            </NavLink>
          </nav>
        </div>

        {/* Logout */}
        <button
          className="flex items-center gap-3 px-4 py-3 rounded-lg
          text-white hover:bg-red-500/80 transition-all"
        >
          <LogOut size={22} />
          Logout
        </button>
      </aside>
    </>
  );
};

export default AdminSidebar;
