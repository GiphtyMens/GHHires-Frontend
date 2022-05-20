import React from "react";
import styles from "./Navbar.module.css";
// import { FaTypo3, FaAlignJustify } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useUserState } from "../../store/userStore";

const Navbar = () => {
  const isLoggedIn = useUserState((state) => state.isLoggedIn);
  const logout = useUserState((state) => state.logOut);

  return (
    <nav className={styles.nav}>
      <div className={styles.nav_logo}>
        <h1>HireMe</h1>
      </div>
      <div className={styles.nav_links}>
        <Link to="/">Home</Link>
        <Link to="/shops">Shops</Link>
        <Link to="/about">About</Link>
        <Link to="/service">our vision</Link>
      </div>
      {isLoggedIn ? (
        <div className={styles.nav_menu}>
          <Link to="/login">
            <button className={styles.btn_1} onClick={() => logout()}>
              Logout
            </button>
          </Link>
        </div>
      ) : (
        <div className={styles.nav_menu}>
          <Link to="/login">
            <button className={styles.btn_1}>Login</button>
          </Link>
          <Link to="/register">
            <button className={styles.btn_2}>Register</button>
          </Link>
          {/* <div className={styles.dropdown}>
          <FaAlignJustify size={21} />
        </div> */}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
