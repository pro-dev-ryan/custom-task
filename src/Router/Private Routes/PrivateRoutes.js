import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import Loader from "../../Components/Loader/PageLoader/Loader";
import { useAuth } from "../../Context/FireContext";

const PrivateRoutes = ({ children }) => {
  const location = useLocation();
  const { user, loader } = useAuth();
  if (loader) {
    return <Loader />;
  }
  if (user && user?.uid) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} replace />;
};

export default PrivateRoutes;
