import React, { useState } from "react";
import { Eye, EyeOff, User, Lock, CheckCircle, XCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";
import video from "../../videos/login.mp4";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPass, setShowPass] = useState(false);
  const [notification, setNotification] = useState({
    message: "",
    type: "success",
    isVisible: false,
  });

  const navigate = useNavigate();

  const showNotification = (message, type = "success") => {
    setNotification({ message, type, isVisible: true });
    setTimeout(() => {
      setNotification((prev) => ({ ...prev, isVisible: false }));
    }, 3000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("https://dummyjson.com/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      if (!response.ok) {
        throw new Error("Неверные данные. Попробуйте снова.");
      }

      const data = await response.json();

      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data));

      showNotification("Вход выполнен!", "success");

      setTimeout(() => {
        navigate("/dashboard");
      }, 1500);
    } catch (error) {
      showNotification(error.message || "Ошибка входа", "error");
    }
  };

  const CustomNotification = ({ message, type, isVisible, onClose }) => {
    const bgColor = type === "success" ? "bg-green-600" : "bg-red-600";
    const icon =
      type === "success" ? <CheckCircle size={20} /> : <XCircle size={20} />;

    return (
      <div
        className={`fixed bottom-6 right-6 p-4 rounded-lg shadow-xl text-white flex items-center space-x-3 transition-all duration-500 ease-in-out transform z-50
          ${bgColor}
          ${isVisible ? "translate-x-0 opacity-100" : "translate-x-full opacity-0 pointer-events-none"}`}
        style={{ minWidth: "280px" }}
      >
        <div className="flex-shrink-0">{icon}</div>
        <div className="flex-grow text-sm font-medium">{message}</div>
        <button
          onClick={onClose}
          className="flex-shrink-0 text-white opacity-70 hover:opacity-100 transition-opacity"
        >
          <XCircle size={16} />
        </button>
      </div>
    );
  };

  return (
    <div className="min-h-screen relative font-inter">
      {/* Background video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src={video} type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-black/50"></div>

      <CustomNotification
        message={notification.message}
        type={notification.type}
        isVisible={notification.isVisible}
        onClose={() =>
          setNotification((prev) => ({ ...prev, isVisible: false }))
        }
      />

      <div className="relative z-10 flex items-center justify-center min-h-screen p-4">
        <div className="relative w-full max-w-md p-8 rounded-2xl shadow-2xl bg-white/10 border border-white/20 overflow-hidden backdrop-blur-lg glass-panel">
          <div className="absolute inset-0 pointer-events-none shine"></div>
          <h2 className="text-3xl font-bold text-white text-center mb-8 tracking-wide drop-shadow-lg">
            Вход
          </h2>

          <form onSubmit={handleSubmit} className="space-y-7 relative z-10">
            <div className="relative">
              <User
                size={20}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-200 drop-shadow"
              />
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-xl bg-white/10 text-white placeholder-gray-300 border border-white/20 focus:border-indigo-400 focus:outline-none focus:ring-1 focus:ring-indigo-400 transition-all text-lg shadow-inner"
                placeholder="Имя пользователя"
                required
              />
            </div>

            <div className="relative">
              <Lock
                size={20}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-200 drop-shadow"
              />
              <input
                type={showPass ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-12 pr-12 py-3 rounded-xl bg-white/10 text-white placeholder-gray-300 border border-white/20 focus:border-indigo-400 focus:outline-none focus:ring-1 focus:ring-indigo-400 transition-all text-lg shadow-inner"
                placeholder="Пароль"
                required
              />
              <button
                type="button"
                onClick={() => setShowPass(!showPass)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-300 hover:text-white transition"
                tabIndex={-1}
              >
                {showPass ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-indigo-600/80 text-white font-semibold rounded-xl shadow-lg hover:bg-indigo-700 active:scale-[.98] transition-all text-lg backdrop-blur-sm border border-white/20"
            >
              Войти
            </button>
          </form>
        </div>
      </div>

      <style>
        {`
          @keyframes fade-in-up {
            0% { opacity: 0; transform: translateY(20px); }
            100% { opacity: 1; transform: translateY(0); }
          }
          .glass-panel {
            animation: fade-in-up 0.8s ease-out forwards;
            box-shadow: 0 0 20px rgba(255,255,255,0.3),
                        inset 0 0 10px rgba(255,255,255,0.2);
          }
          .shine {
            background: linear-gradient(120deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.4) 50%, rgba(255,255,255,0) 100%);
            transform: skewX(-20deg);
            animation: shine-move 4s infinite;
          }
          @keyframes shine-move {
            0% { transform: translateX(-150%) skewX(-20deg); }
            50% { transform: translateX(150%) skewX(-20deg); }
            100% { transform: translateX(150%) skewX(-20deg); }
          }
        `}
      </style>
    </div>
  );
};

export default Login;
