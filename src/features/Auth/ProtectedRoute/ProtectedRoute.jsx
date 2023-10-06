import { Navigate, Outlet } from "react-router-dom";

import { useToken } from "../../../hooks/useAuth";

const ProtectedRoute = () => {
  const { token } = useToken();

  return token ? <Outlet /> : <Navigate to="/login" replace />;
};

export default ProtectedRoute;
