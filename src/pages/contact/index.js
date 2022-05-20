import React from "react";
import styles from "./contact.module.css";
import { FaHouseUser, FaFemale } from "react-icons/fa";
import Navbar from "../../components/Navbar/index";

const Contact = () => {
  return (
    <>
      <Navbar />
      <div className={styles.main_page}>
        <div className={styles.main_page1}>
          <h2>CONTACT US</h2>
          <h1>How can we help?</h1>
        </div>
        <div className={styles.main_page2}>
          <div className={styles.mp2_card1}>
            <h6>
              <FaHouseUser />
            </h6>
            <h1>For Partners</h1>
            <h3>Contact Partner Support</h3>
            <h3>Setup your account</h3>
            <button>Partner help center</button>
          </div>
          <div className={styles.mp2_card2}>
            <h6>
              <FaFemale />
            </h6>
            <h1>For Bookers</h1>
            <h3>About Fresher</h3>
            <h3>Fresher account and profile</h3>
            <h3>Your appointments</h3>
            <h3>Vouchers and memberships</h3>
            <h3>Product orders</h3>
            <button>Book help center</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
