import React from "react";
import { Outlet, Navigate } from "react-router-dom";

const PrivateRouter = () => {
  const isAuthenticated = true;
  return isAuthenticated ? <Outlet /> : <Navigate to="/" />;
};

export default PrivateRouter;
