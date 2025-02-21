import React, { useContext } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Signin from "../components/admin/Signin";
import Dashboard from "../components/admin/Dashboard";
import { AuthContext } from "../context/AuthContext";

function Admin() {
  const { isAuthenticated } = useContext(AuthContext);

  return (
    <Routes>
      <Route path="/" element={<Signin />} />
      <Route
        path="/dashboard/*"
        element={isAuthenticated ? <Dashboard /> : <Navigate to="/admin" />}
      />
    </Routes>
  );
}

export default Admin;
