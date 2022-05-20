import { useLocation, Navigate, Outlet } from "react-router-dom";
import { useUserState } from "../store/userStore";

const ProtectRoute = ({ path, component: Component, ...rest }) => {
  const isLoggedIn = useUserState((state) => state.isLoggedIn);
  const location = useLocation();

  return isLoggedIn ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={(path = location.pathname)} />
  );
};

export default ProtectRoute;





































































































