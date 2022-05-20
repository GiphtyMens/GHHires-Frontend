import React from "react";
import styles from "./Services.module.css";
import { BsFillPlusSquareFill } from "react-icons/bs";

const Services = () => {
  return (
    <div className={styles.main_description}>
      <div className={styles.first_row}>
        <div className={styles.description_card1}>
          <BsFillPlusSquareFill
            size={70}
            style={{ margin: "7rem 0 0 7.5rem", cursor: "pointer" }}
          />
        </div>
        <div className={styles.description_card1}>
          <h5></h5>
          <h1>Low Fade</h1>
          <p>
            Low fade is when the hair disappears more than a few inches below
            the hairline.
          </p>
          <h2>GHS 20</h2>
        </div>
        <div className={styles.description_card2}>
          <h5></h5>
          <h1>High Fade</h1>
          <p>
            High fade is when the hair completely disappears within a few inches
            of the hairline.
          </p>
          <h2>GHS 20</h2>
        </div>
        <div className={styles.description_card3}>
          <h5></h5>
          <h1>Mid Fade</h1>
          <p>
            If you want the fade to end somewhere in between a low fade and a
            high fade.
          </p>
          <h2>GHS 20</h2>
        </div>
        {/* </div>
      <div className={styles.second_row}> */}
        <div className={styles.des_card1}>
          <h5></h5>
          <h1>Crew Cut</h1>
          <p>
            Shave the hair shorter on the sides, but the hair is left longer on
            top.
          </p>
          <h2>GHS 20</h2>
        </div>
        <div className={styles.des_card2}>
          <h5></h5>
          <h1>Buzzcuts</h1>
          <p>
            Shave the hair to a consistently short length that's
            almost-but-not-quite bald
          </p>
          <h2>GHS 20</h2>
        </div>
        <div className={styles.des_card3}>
          <h5></h5>
          <h1>Quiff</h1>
          <p>
            little mountain of hair at the front, combed upwards and hair combed
            forward.
          </p>
          <h2>GHS 20</h2>
        </div>
      </div>
    </div>
  );
};

export default Services;
