import React from "react";
import { LogOut, Menu } from "lucide-react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

// Prop nomi onMenuClick'dan toggleSidebar'ga o'zgartirildi
const Navbar = ({ toggleSidebar }) => {
  const navigate = useNavigate();

  const handleLog = () => {
    toast.warning("Вы вышли", {
      position: "top-center",
      autoClose: 1500,
    });
    localStorage.removeItem("token");
    setTimeout(() => navigate("/"), 1500);
  };

  return (
    <nav
      className="fixed top-0 left-0 w-full h-16 z-50 flex items-center justify-between px-4 sm:px-6 text-white animate-fade-in-down"
      style={{
        background:
          "linear-gradient(145deg, rgba(255,255,255,0.15), rgba(255,255,255,0.05))",
        backdropFilter: "blur(15px)",
        WebkitBackdropFilter: "blur(15px)",
        borderBottom: "1px solid rgba(255,255,255,0.2)",
        boxShadow:
          "0 4px 20px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.2)",
      }}
    >
      {/* Левая часть: меню и название */}
      <div className="flex items-center gap-4">
        {/* Гамбургер для мобилок */}
        <button
          // onClick propiga to'g'ri nomdagi funksiya berildi
          onClick={toggleSidebar}
          className="block lg:hidden p-2 rounded-lg hover:bg-white/10 transition"
        >
          <Menu size={22} />
        </button>

        {/* Название */}
        <div
          className="text-lg sm:text-xl font-semibold tracking-wider"
          style={{ textShadow: "0 2px 4px rgba(0,0,0,0.5)" }}
        >
          Admin panel
        </div>
      </div>

      {/* Кнопка выхода */}
      <button
        onClick={handleLog}
        className="flex items-center gap-2 px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm font-medium transition-all"
        style={{
          background:
            "linear-gradient(145deg, rgba(255,0,0,0.6), rgba(200,0,0,0.4))",
          boxShadow:
            "inset 0 1px 0 rgba(255,255,255,0.3), 0 4px 10px rgba(0,0,0,0.3)",
        }}
      >
        <LogOut size={18} /> <span className="hidden xs:inline">Выход</span>
      </button>
    </nav>
  );
};

export default Navbar;