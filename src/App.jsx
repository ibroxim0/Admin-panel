import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Login from "./components/login/Login";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Dashboard from "./pages/Dashboard.jsx";
import Products from "./pages/Products.jsx";
import Users from "./pages/Users.jsx";

const App = () => {
  const token = localStorage.getItem("token");

  return (
    <>
      <ToastContainer />
      <Routes>
        {/* Login har doim mavjud, token bo‘lsa ham */}
        <Route path="/login" element={<Login />} />

        {/* Token mavjud bo‘lsa, Layout ichidagi sahifalar ishlaydi */}
        <Route
          path="/"
          element={
            token ? <Layout /> : <Navigate to="/login" replace />
          }
        >
          <Route index element={<Navigate to="dashboard" replace />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="products" element={<Products />} />
          <Route path="users" element={<Users />} />
        </Route>

        {/* Default: agar yo‘l notanish bo‘lsa login yoki dashboardga yo‘naltiramiz */}
        <Route
          path="*"
          element={
            token ? <Navigate to="/dashboard" replace /> : <Navigate to="/login" replace />
          }
        />
      </Routes>
    </>
  );
};

export default App;
