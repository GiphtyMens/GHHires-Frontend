import { useLocation, Navigate, Outlet } from "react-router-dom";
import { shopUserState } from "../store/shopStore";

const ShopRoutes = ({ path, component: Component, ...rest }) => {
  const isLoggedIn = shopUserState((state) => state.isLoggedIn);
  const location = useLocation();

  return isLoggedIn ? (
    <Outlet />
  ) : (
    <Navigate to="/auth/login-shop" state={(path = location.pathname)} />
  );
};

export default ShopRoutes;
