import React from "react";
import styles from "./Header.module.css";
// import { BsSearch } from "react-icons/bs";

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.header_text}>
        <div>
          <h1>Welcome to GHires</h1>
          <h3>service at your fingertips</h3>
          <button>Book Now</button>
        </div>
      </div>
      <div className={styles.header_img}>
        {/* <h5></h5> */}
      </div>
    </div>
  );
};

export default Header;
