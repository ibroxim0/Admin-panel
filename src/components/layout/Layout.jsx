import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import SideBar from "../SideBar";
import Navbar from "../Navbar";
import video1 from '../../videos/video1.mp4'

const Layout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Video Background */}
      <video
        className="absolute inset-0 w-full h-full object-cover z-0"
        src={video1}
        autoPlay
        loop
        muted
        playsInline
      ></video>

      {/* Light Overlay for Text Readability */}
      <div className="absolute inset-0 bg-black/50 z-0" />

      {/* Main Content Container */}
      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Navbar-ga toggle funksiyasini to'g'ri nom bilan o'tkazish */}
        <Navbar toggleSidebar={toggleSidebar} />
        
        {/* Responsive Content Area */}
        <div className="flex flex-1 flex-col lg:flex-row">
          {/* Sidebar-ga holat va toggle funksiyasini o'tkazish */}
          <SideBar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
          
          <div className="flex-1 p-4 lg:p-6 overflow-y-auto">
            {isSidebarOpen && (
              <div 
                className="fixed inset-0 bg-black/50 z-30 lg:hidden"
                onClick={toggleSidebar}
              />
            )}
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;