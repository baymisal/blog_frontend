import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthContext"; 

const ProtectedRoute = ({ allowedRoles }) => {
  const { user } = useAuth();

  if (!user?.role) {
    return <Navigate to="/guest" replace />;
  }

  if (!allowedRoles.includes(user.role)) {
    return <Navigate to="/guest" replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;

