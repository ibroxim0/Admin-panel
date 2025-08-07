import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle, XCircle, LogIn, LogOut } from "lucide-react";
import React from "react";

const icons = {
  success: <CheckCircle className="text-green-400" size={20} />,
  error: <XCircle className="text-red-400" size={20} />,
  login: <LogIn className="text-blue-400" size={20} />,
  logout: <LogOut className="text-yellow-400" size={20} />,
};

const ToastMessage = ({ type = "success", message = "", show, onClose }) => {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, y: -20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -20, scale: 0.95 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="fixed top-6 right-6 z-[9999] bg-black/80 border border-white/10 shadow-lg rounded-xl px-4 py-3 flex items-center gap-3 backdrop-blur-md text-white text-sm"
        >
          {icons[type] || icons.success}
          <span>{message}</span>
          <button onClick={onClose} className="ml-auto text-gray-400 hover:text-white transition">
            ✖
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ToastMessage;
