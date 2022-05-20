import React from "react";
import styles from "./Default.module.css";
import { BiUpArrowAlt } from "react-icons/bi";
const Default = () => {
  return (
    <div className={styles.default}>
      <div className={styles.default_container_one}>
        <div className={styles.dc_card}>
          <ul>
            <li>
              <div>
                <h3>Booking</h3>
                <div>
                  <p>
                    170 <BiUpArrowAlt />
                  </p>
                  
                </div>
              </div>
            </li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
        <div className={styles.dc_card}></div>
      </div>
      <div className={styles.default_container_two}></div>
      <div className={styles.default_container_three}></div>
    </div>
  );
};

export default Default;
