import React from "react";
import styles from "./aboutUs.module.css";
// import { FaTypo3 } from "react-icons/fa";
import Navbar from "../../components/Navbar/index";

const AboutUs = () => {
  return (
    <div>
      <Navbar />
      <br />
      <br />
      <br />
      <div className={styles.header_session}>
        <h5></h5>
        <h1>
          Discover the easiest way to schedule appointments with the #1 online
          booking system
        </h1>
      </div>
      <div className={styles.session_one}>
        <h1>Service at your fingertips</h1>
        <p>
          Save time spent on coordinating appointments over phone and email with
          an all-in-one appointment booking software. Accept online bookings
          24x7, automate payments, business management, marketing, and more!
        </p>
      </div>
      <button style={{ height: "3rem", width: "15rem" }}>
        Get Started now!
      </button>
    </div>
  );
};

export default AboutUs;
