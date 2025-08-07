import React from "react";
import { NavLink } from "react-router-dom";
import { LayoutDashboard, Package, Users } from "lucide-react";

// Sidebar komponenti endi isOpen va toggleSidebar prop-larini qabul qiladi
const SideBar = ({ isOpen, toggleSidebar }) => {
  return (
    <aside
      className={`fixed top-0 left-0 h-full w-64 bg-black/60 backdrop-blur-sm border-r border-white/10 text-white z-40 transition-transform duration-300 ease-in-out p-4 pt-20
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        lg:translate-x-0 lg:static lg:h-auto lg:top-auto lg:p-4 lg:pt-4
      `}
    >
      
      {/* Title */}
      <h1 className="text-xl font-bold mb-6 tracking-wide text-center">
        Меню
      </h1>
      
      {/* Navigation */}
      <nav className="flex flex-col gap-2">
        <NavLink
          to="/dashboard"
          // Mobil versiyada link bosilganda sidebar yopilsin
          onClick={toggleSidebar}
          className={({ isActive }) =>
            `flex items-center gap-3 px-4 py-3 rounded-lg transition-all hover:bg-white/10 text-sm font-medium ${
              isActive ? "bg-white/10" : ""
            }`
          }
        >
          <LayoutDashboard size={18} /> Dashboard
        </NavLink>
        <NavLink
          to="/products"
          onClick={toggleSidebar}
          className={({ isActive }) =>
            `flex items-center gap-3 px-4 py-3 rounded-lg transition-all hover:bg-white/10 text-sm font-medium ${
              isActive ? "bg-white/10" : ""
            }`
          }
        >
          <Package size={18} /> Products
        </NavLink>
        <NavLink
          to="/users"
          onClick={toggleSidebar}
          className={({ isActive }) =>
            `flex items-center gap-3 px-4 py-3 rounded-lg transition-all hover:bg-white/10 text-sm font-medium ${
              isActive ? "bg-white/10" : ""
            }`
          }
        >
          <Users size={18} /> Users
        </NavLink>
      </nav>
    </aside>
  );
};

export default SideBar;