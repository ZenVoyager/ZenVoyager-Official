import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Signin from "../components/admin/Signin";
import Dashboard from "../components/admin/Dashboard";

function Admin() {
  const isAuthenticated = true; // TODO: Replace with actual authentication logic

  return (
    <>
      <Routes>
        <Route path="/" element={<Signin />} />
        <Route
          path="/dashboard/*"
          element={isAuthenticated ? <Dashboard /> : <Navigate to="/" />}
        />
      </Routes>
    </>
  );
}

export default Admin;