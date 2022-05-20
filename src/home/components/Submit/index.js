import React from "react";
import styles from "./Submit.module.css";
import { Link } from "react-router-dom";

const Submit = () => {
  return (
    <div className={styles.submit}>
      <h3>Register with GH-Hires and get unlimited job offers</h3>
      <p>Are you an artisan or have a shop providing handwork services?</p>
      <p>We have over 1 million job offers for you.</p>
      <br />
      <Link to="/auth/register-shop">
        <button>Register as an artisan</button>
      </Link>
    </div>
  );
};

export default Submit;
