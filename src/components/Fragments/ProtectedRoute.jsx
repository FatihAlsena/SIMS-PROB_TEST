import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ element }) => {
  const isAuthenticated = !!sessionStorage.getItem("jwtToken");
  return isAuthenticated ? element : <Navigate to="/login" replace />;
};

export default ProtectedRoute;