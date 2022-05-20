import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./home/index";
import Login from "./auth/user/Login";
import Register from "./auth/user/Register";
import ProtectRoute from "./routes/ProtectedRoutes";
import Dashboard from "./Admin";
import Account from "./Admin/Layout/Account";
import Appointment from "./Admin/Layout/Appointment";
import Default from "./Admin/Layout/Default";
import Services from "./Admin/Layout/Services";
import RegisterShop from "./auth/admin/Rgister";
import LoginShop from "./auth/admin/Login";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer/index";
import Contact from "./pages/contact";
import Shops from "./pages/Shop";
import AboutUs from "./pages/aboutUs";
import ShopRoutes from "./routes/ShopRoutes";
import Profile from "./containers/Profile/index";
import UserAccount from "./containers/Profile/_partials/Account";
import Booking from "./containers/Profile/_partials/Appointments/index";
import Chat from "./containers/Profile/_partials/Chat/index";
import Favorite from "./containers/Profile/_partials/Favorites/index";
import Received from "./containers/Profile/_partials/Received";
import Setting from "./containers/Profile/_partials/Setting";
import Board from "./containers/Profile/_partials/Board";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* <Navbar /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route element={<ProtectRoute />}> */}
            <Route path="profile" element={<Profile />}>
              <Route path="account" element={<UserAccount />} />
              <Route path="booking" element={<Booking />} />
              <Route path="chat" element={<Chat />} />
              <Route path="fav" element={<Favorite />} />
              <Route path="received" element={<Received />} />
              <Route path="setting" element={<Setting />} />
              <Route path="board" element={<Board />} />
            {/* </Route> */}
          </Route>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="auth/login-shop" element={<LoginShop />} />
          <Route path="auth/register-shop" element={<RegisterShop />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/shops" element={<Shops />} />
          <Route path="/about" element={<AboutUs />} />

          <Route element={<ShopRoutes />}>
            {/* dashboard */}
            <Route path="/d" element={<Dashboard />}>
              <Route path="account" element={<Account />} />
              <Route path="appointment" element={<Appointment />} />
              <Route path="default" element={<Default />} />
              <Route path="services" element={<Services />} />
            </Route>
          </Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
